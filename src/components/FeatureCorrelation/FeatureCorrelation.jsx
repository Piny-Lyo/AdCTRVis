import * as d3 from 'd3';
// eslint-disable-next-line
import { useEffect, useState, useRef, useContext } from 'react';
// eslint-disable-next-line
import { allCor, inclassCor } from '../../data/featureCorrelation/featureCorData';
import '../Common.css'
// eslint-disable-next-line
import { Observer, useLocalObservable, MobXProviderContext } from 'mobx-react';
import { store as s1 } from '../../store/store';

function FeatureCorrelation() {
    //const store = useContext(MobXProviderContext).store;
    const store = useLocalObservable(() => s1);

    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    // eslint-disable-next-line
    const [data, setData] = useState(inclassCor);

    console.log('before Cor Effect1', store.selectedFeature)
    useEffect(() => {
        console.log('in Cor Effect1', store.selectedFeature)
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];

        // Draw the chart
        // drawFeatureCorrelation(element, width, height, data, tooltip);

        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        const [nodes, links] = [data.nodes, data.links];
        // const color = d3.scaleOrdinal(d3.schemeCategory10);
        const myColor = ['#ffd666', '#ffa39e', '#87e8de'] //gold-4 red-3 cyan-3

        // Create a new simulation to layout a graph
        const simulation = d3.forceSimulation()
            // (d) => d.id 识别id（string），而不是默认的数值 d.index，参考：https://github.com/d3/d3-force#link_id
            .force("link", d3.forceLink().id((d) => d.id))
            .force("charge", d3.forceManyBody().strength(-8)) // 节点之间的斥力，default -30
            // .force("x", d3.forceX(width / 2, height / 2))
            // .force("y", d3.forceY(width / 2, height / 2))
            .force("center", d3.forceCenter(width / 2, height / 2));

        let selectedLink = null;
        const link = svg.append("g")
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke", "#999")
            .attr("stroke-opacity", d => Math.abs(d.value) * 0.5)
            .attr("stroke-width", d => Math.abs(d.value) * 10)
            // link 提示框交互
            .on("mousedown", (event, d) => {
                console.log(event, d)
                let coordinates = d3.pointer(event);
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    // eslint-disable-next-line
                    .html("Link between " + d.source.id + " and " + d.target.id + "<br>" + "Correlation:" + d.value)
                    .style("display", "inline-block");
                selectedLink = event.target;
                selectedLink.setAttribute("stroke", "lightgrey");
            })
            .on("mouseup", () => {
                tooltip.style("display", "none");
                selectedLink.setAttribute("stroke", "#999");
            });

        let selectedNode = null;
        const node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            //.attr("fill", d => color(d.group))
            .attr("fill", d => myColor[d.group - 1])
            .attr("stroke", "#fff")
            .attr("stroke-opacity", 1)
            .attr("stroke-width", 1.5)
            .attr("r", 8)
            .call(drag(simulation)) // 拖拽交互
            // node 提示框
            .on("mouseover", (event, d) => {
                // console.log(event, d)
                let coordinates = d3.pointer(event);
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    .html(d.id)
                    .style("display", "inline-block");
                selectedNode = event.target;
                selectedNode.setAttribute("r", 10);

                //store.setSelectedFeature(d.id)
                console.log('in Cor Node', store.selectedFeature);
            })
            .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                selectedNode.setAttribute("r", 8);
            });

        // 把上面绘制出来的node和link模拟出来（+交互）
        simulation.nodes(nodes).on('tick', ticked);
        simulation.force('link').links(links).distance(d => (1 / (Math.abs(d.value) + 1)) * 80);

        // 图例legend
        const legeng_data = [
            { color: myColor[0], label: "ad" },
            { color: myColor[1], label: "user" },
            { color: myColor[2], label: "media" }
        ];

        // 绘制图例
        const legend = svg.append("g")
            .selectAll("g")
            .data(legeng_data)
            .join("g")
            .attr("transform", function (d, i) { return "translate(0," + i * 30 + ")"; })

        legend.append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 20)
            .attr("height", 15)
            .style("fill", function (d) { return d.color; });

        legend.append("text")
            .attr("x", 35)
            .attr("y", 20)
            .style("text-anchor", "start")
            .text(function (d) { return d.label; });


        // D3 交互函数
        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }
    });

    // // why??? don't work
    // useEffect(() => {
    //     console.log('in Cor Effect2', localStore.selectedFeature)
    // }, [localStore.selectedFeature])

    return (
        <Observer>{() =>
            <div style={{ height: '100%' }} ref={elementRef} >
                {store.selectedFeature}
                <div className="tooltip" ref={tooltipRef}></div>
            </div>
        }
        </Observer>
    );
}
export default FeatureCorrelation;

// eslint-disable-next-line
function drawFeatureCorrelation(element, width, height, data, tooltip) {
    // 清除已有svg
    if (element.selectAll('svg')) {
        element.selectAll('svg').remove();
    }
    // 新建svg
    let svg = element
        .append('svg')
        .attr("width", width)
        .attr("height", height);

    const [nodes, links] = [data.nodes, data.links];
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create a new simulation to layout a graph
    const simulation = d3.forceSimulation()
        //识别id（string），而不是默认的数值 d.index，参考：https://github.com/d3/d3-force#link_id
        .force("link", d3.forceLink().id((d) => d.id))
        .force("charge", d3.forceManyBody().strength(-8)) // 节点之间的斥力，default -30
        // .force("x", d3.forceX(width / 2, height / 2))
        // .force("y", d3.forceY(width / 2, height / 2))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", d => Math.abs(d.value) * 0.6)
        .attr("stroke-width", d => Math.abs(d.value) * 10)
        // link 提示框交互
        .on("mousedown", (event, d) => {
            event.stopPropagation();
            event.preventDefault();
            let coordinates = d3.pointer(event);
            tooltip
                .style("left", coordinates[0] + "px")
                .style("top", coordinates[1] + "px")
                // eslint-disable-next-line
                .html("Link between " + d.source.id + " and " + d.target.id + "<br>" + "Correlation:" + d.value)
                .style("display", "inline-block")
        })
        .on("mouseup", () => {
            tooltip.style("display", "none");
        });

    const node = svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("fill", d => color(d.group))
        .attr("stroke", "#fff")
        .attr("stroke-opacity", 1)
        .attr("stroke-width", 1.5)
        .attr("r", 8)
        .call(drag(simulation)) // 拖拽交互
        // node 提示框
        .on("mouseover", (event, d) => {
            console.log(event, d)
            let target = event.target;
            console.log(target);
            target.setAttribute("r", 10)
            let coordinates = d3.pointer(event);
            tooltip
                .style("left", coordinates[0] + "px")
                .style("top", coordinates[1] + "px")
                .html(d.id)
                .style("display", "inline-block")
        })
        .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡
            tooltip.style("display", "none");
        });

    // 把上面绘制出来的node和link模拟出来（+交互）
    simulation.nodes(nodes).on('tick', ticked);
    simulation.force('link').links(links).distance(d => (1 / (Math.abs(d.value) + 1)) * 80);

    // 图例legend
    const legeng_data = [
        { color: color(1), label: "ad" },
        { color: color(2), label: "user" },
        { color: color(3), label: "media" }
    ];

    // 绘制图例
    const legend = svg.append("g")
        .selectAll("g")
        .data(legeng_data)
        .join("g")
        .attr("transform", function (d, i) { return "translate(0," + i * 30 + ")"; })

    legend.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 20)
        .attr("height", 15)
        .style("fill", function (d) { return d.color; });

    legend.append("text")
        .attr("x", 35)
        .attr("y", 20)
        .style("text-anchor", "start")
        .text(function (d) { return d.label; });


    // D3 交互函数
    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
    }

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
}

