import * as d3 from 'd3';
import * as d3_hexbin from 'd3-hexbin'
import { useEffect, useRef } from 'react';
import '../styles/common.css'
import { overviewData } from '../data/overviewData';


function DataOverview() {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    const data = overviewData;

    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        // const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        const margin = ({ top: 30, left: 30, right: 0, bottom: 0 })
        const color = d3.interpolateBrBG;

        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        // Draw the confusion matrix    
        // const myColor = ['#2ca25f', '#99d8c9', '#8856a7', '#9ebcda', '#f7f7f7'];
        const myColor = [color(0.8), color(0.6), color(0.2), color(0.4)]
        const testMatixData = [
            { color: myColor[0], label: "TP", value: 400 },
            { color: myColor[1], label: "FP", value: 200 },
            { color: myColor[2], label: "TN", value: 300 },
            { color: myColor[3], label: "FN", value: 100 }
        ];
        const all = data.length;
        const matrix = svg.append("g")
            .selectAll("g")
            .data(testMatixData)
            .join("g")
            .attr("transform", (d, i) => {
                let sum = 0;
                for (let j = 0; j < i; j++) {
                    sum += testMatixData[j].value;
                }
                return `translate(2,${(height - 20) * (sum / all) + 8})` // -20是空出上下，+8是起点位置
            });

        matrix.append("rect")
            .attr("width", margin.left)
            .attr("height", (d, i) => (height - 20) * (d.value / all))
            .style("fill", function (d) { return d.color; });

        matrix.append("text")
            .attr("x", 6)
            .attr("y", (d, i) => (height - 20) * (d.value / all) / 2)
            .style("text-anchor", "start")
            .text((d) => d.label);


        // Draw the score legend
        const legengWidth = width - margin.left - 20;
        const legend = svg.append("g")
            .attr("transform", `translate(${margin.left},0)`);

        const gradient = legend.append("defs") //SVG渐进色linearGradient
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.selectAll("stop")
            .data(d3.range(100))
            .join("stop")
            .attr("offset", (d) => d + "%")
            .attr("stop-color", (d) => color(d / 100));

        legend.append("rect")
            .attr("x", 10)
            .attr("y", 5)
            .attr("width", legengWidth)
            .attr("height", 10)
            .attr("fill", "url(#gradient)");
        //.attr("fill", `linear-gradient(${color(0)}, ${color(1)})`) 不能直接这样用

        legend.append("text")
            .attr("x", 10)
            .attr("y", 30)
            .text('0');

        legend.append("text")
            .attr("x", legengWidth + 5)
            .attr("y", 30)
            .text('1');

        legend.append("text")
            .attr("x", legengWidth / 2 - 20)
            .attr("y", 30)
            .text('Probability');

        // Draw the t-sne scatter chart       

        const x = d3.scaleLinear()
            .domain(d3.extent(data, d => d.x)).nice()
            .range([margin.left, width - margin.left])

        const y = d3.scaleLinear()
            .domain(d3.extent(data, d => d.y)).nice()
            .range([height - margin.top, margin.top])

        const scatter = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // const dot = scatter.append("g")
        //     .attr("fill", "lightblue")
        //     .attr("stroke", "white")
        //     .selectAll("circle")
        //     .data(data)
        //     .join("circle")
        //     .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
        //     .attr("r", 3);

        // const brush = d3.brush()
        //     .on("start brush end", brushed);

        // scatter.call(brush);

        // function brushed({ selection }) {
        //     let value = [];
        //     if (selection) {
        //         const [[x0, y0], [x1, y1]] = selection;
        //         value = dot
        //             .style("fill", "lightgray")
        //             .filter(d => x0 <= x(d.x) && x(d.x) < x1 && y0 <= y(d.y) && y(d.y) < y1)
        //             .style("fill", "lightblue")
        //             .data();
        //     } else {
        //         dot.style("fill", "lightblue");
        //     }
        //     svg.property("value", value).dispatch("input");
        // }

        // Draw hexbin scatter

        const hexbin = d3_hexbin.hexbin()
            .x(d => x(d.x)) // 如果用d3 hexbin示例的scaleLog比例尺会显示不出来，因为坐标有负数。
            .y(d => y(d.y))
            .radius(10 * width / (height - 1)) // 10 radius
            .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]]);

        const bins = hexbin(data);
        //console.log("bins", bins);

        // const bincolor = d3.scaleSequential(d3.interpolateBrBG)
        //     .domain([0, d3.max(bins, d => d.length) / 2])

        scatter.append("g")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.1)
            .selectAll("path")
            .data(bins)
            .join("path")
            .attr("d", hexbin.hexagon())
            .attr("transform", d => `translate(${d.x},${d.y})`)
            .attr("opacity", d => (d.length / all) * bins.length) // 透明度编码数量多少
            .attr("fill", d => color(d.reduce((sum, current) => sum + current.probability, 0) / d.length)); // TODO：hex颜色编码内部节点的预测分数均值。 Done
    })

    return (
        <div style={{ height: '100%' }} ref={elementRef} >
            <div className="tooltip" ref={tooltipRef}></div>
        </div>
    );
}

export default DataOverview;