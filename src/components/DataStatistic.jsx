import * as d3 from 'd3';
import { Radio } from 'antd';
import { useEffect, useRef, useState } from 'react';
//import { cat_index, num_index, cat, num } from '../data/dataStatistic';
import { dataListData } from '../data/dataList';

function DataStatistic() {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);

    const [value, setValue] = useState(2); //type
    const onChange = (e) => {
        console.log('radio checked', e);
        setValue(e.target.value);
    };

    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        const margin = { top: 0, right: 10, bottom: 20, left: 10 };
        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        const svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height)
        // .attr("transform", `translate(10,${- height / 6})`);

        // --------------小提琴图-----------------

        // 导入数据
        const data = dataListData;

        const cat_index = ['user_id', 'city', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'residence', 'purchase_tag'];
        const num_index = ['age', 'city_rank', 'emui_version', 'device_release_time', 'device_price', 'lifecycle', 'membership_grade', 'membership_lifecycle', 'daily_active_time']

        // 循环画多个小提琴图
        const violins = svg.append("g");
        for (let i = 0; i < num_index.length; i++) {
            let violin = violins.append("g").attr("class", num_index[i]);
            drawViolin(i, violin);
        }

        function drawViolin(i, violin) {
            const center = [width / 4, (height - margin.bottom - margin.top) / 2 - margin.bottom];

            // 提取数值列
            let values = data.map(d => d[num_index[i]]);
            // ----------画小提琴背景----------

            const violinWidth = (height - margin.top - margin.bottom) / (num_index.length * 2); // 一般的宽度  /18

            // 定义x轴比例尺
            const x = d3.scaleLinear()
                .domain([d3.min(values), d3.max(values)])
                .range([center[0], width / 2 - margin.right]);

            // 计算核密度估计函数
            const density = kernelDensityEstimator(epanechnikov(3), x.ticks((d3.max(values) - d3.min(values)) * 2))(values);

            // 定义y轴比例尺
            const y = d3.scaleLinear()
                .domain([0, d3.max(density, d => d[1])])
                .range([center[1], center[1] - violinWidth]);

            const y_sym = d3.scaleLinear()
                .domain([0, d3.max(density, d => d[1])])
                .range([center[1], center[1] + violinWidth]);

            // 定义小提琴图形状
            const area = d3.area()
                .x(d => x(d[0]))
                .y0(y(0))
                .y1(d => y(d[1]))
                .curve(d3.curveCatmullRom);

            const area_sym = d3.area()
                .x(d => x(d[0]))
                .y0(y(0))
                .y1(d => y_sym(d[1]))

            // 绘制小提琴图背景
            violin.append("path")
                .datum(density)
                .attr("d", area)
                .attr("fill", "lightblue");

            violin.append("path")
                .datum(density)
                .attr("d", area_sym)
                .attr("fill", "lightblue");

            // 定义核函数
            function kernelDensityEstimator(kernel, x) {
                return function (sample) {
                    return x.map(function (x) {
                        return [x, d3.mean(sample, function (v) { return kernel(x - v); })];
                    });
                };
            }

            // 定义Epanechnikov核函数
            function epanechnikov(bandwidth) {
                return x => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
            }

            //---------绘制中间箱形图---------

            // 计算五个统计指标
            // const [min, max] = d3.extent(values);
            const q1 = d3.quantile(values, 0.25); //下四分位数
            const q2 = d3.quantile(values, 0.5);
            const q3 = d3.quantile(values, 0.75); //上四分位数

            const iqr = q3 - q1; // 四分位距（interquartile range, IQR）
            const minLimit = q1 - 1.5 * iqr; // 下限
            const maxLimit = q3 + 1.5 * iqr; // 上限
            const outliers = values.filter(d => d < minLimit || d > maxLimit);

            const newValues = values.filter(d => !outliers.includes(d));
            const [newMin, newMax] = d3.extent(newValues);

            //console.log(q1, q2, q3, min, max, minLimit, maxLimit, outliers)

            const boxHeight = violinWidth * 0.5;
            // 绘制箱子
            violin.append("rect")
                .attr("x", x(q1))
                .attr("y", center[1] - boxHeight / 2)
                .attr("width", x(q3) - x(q1))
                .attr("height", boxHeight)
                .attr("fill", "lightgrey");

            // 绘制中位线
            violin.append("line")
                .attr("x1", x(q2))
                .attr("y1", center[1] - boxHeight / 2)
                .attr("x2", x(q2))
                .attr("y2", center[1] + boxHeight / 2)
                .attr("stroke", "grey");

            // 绘制上下边缘 (去除outlier之后的最大最小值)
            violin.append("line")
                .attr("x1", x(newMin))
                .attr("y1", center[1])
                .attr("x2", x(q1))
                .attr("y2", center[1])
                .attr("stroke", "grey");
            violin.append("line")
                .attr("x1", x(q3))
                .attr("y1", center[1])
                .attr("x2", x(newMax))
                .attr("y2", center[1])
                .attr("stroke", "grey");

            // 绘制异常值
            violin.selectAll("circle")
                .data(outliers)
                .join("circle")
                .attr("cx", d => x(d))
                .attr("cy", center[1])
                .attr("r", 3)
                .attr("fill", "grey");

            // 旋转
            violin.attr("transform", `rotate(${i * 40} ${center[0]} ${center[1]})`);

            // tooltip
            violin.on("mouseover", (event) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] - 50 + "px")
                    //.html(num_index[i])
                    .html(num_index[i] + '<br>' +
                        'Min: ' + newMin + ' Max:' + newMax + '<br>' +
                        'Q1(25%):' + q1 + '<br>' +
                        'Q2(50%):' + q2 + '<br>' +
                        'Q1(75%):' + q3 + '<br>' +
                        'Outlier:' + outliers.join(','))
                    .style("display", "inline-block");
                violin.attr("opacity", 0.8); //.attr()方法是D3的，用于d3选择集；Element.setAttribute()方法是js自带的，用于SVG元素的引用
            })
                .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    violin.attr("opacity", 1);
                });
        }

        // -------------玫瑰图-------------
        const rose = svg.append("g")
            .attr("transform", `translate(${3 / 4 * width},${(height - margin.bottom - margin.top) / 2 - margin.bottom})`);

        // 计算cat数据的频率最高值、频率
        let roseData = [];
        for (let i = 0; i < cat_index.length; i++) {
            let cat_values = data.map(d => d[cat_index[i]]);
            let groupCount = d3.rollups(cat_values, v => v.length, d => d); //计算每个值及其出现频率 [value, freq]
            let maxFeqIndex = d3.maxIndex(groupCount, d => d[1]); // 找到频率最高的元素对应索引 
            let maxValueFreq = groupCount[maxFeqIndex]; // freq最大的 [value, freq]
            let obj = {
                name: cat_index[i],
                maxValue: maxValueFreq[0],
                maxFreq: maxValueFreq[1]
            }
            roseData.push(obj);
        }

        // 绘制扇形
        const n = data.length;
        const angle = Math.PI * 2 / cat_index.length;
        const r = width / 4 - margin.right;

        const arcs = d3.arc()
            .innerRadius(0)
            .outerRadius(d => r * (d.maxFreq / n))
            .padAngle(0.075) // 设置扇形之间的间距
            .padRadius(d => r * (d.maxFreq / n)) // The pad radius determines the fixed linear distance separating adjacent arcs, defined as padRadius * padAngle
            .startAngle((d, i) => i * angle)
            .endAngle((d, i) => (i + 1) * angle);

        let selected = null;

        rose.selectAll('path')
            .data(roseData)
            .join('path')
            .attr('d', arcs)
            .attr('fill', 'lightblue')
            .on("mouseover", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    .html(d.name + '<br>' +
                        'Most Value:' + d.maxValue + '<br>' +
                        'Frequency:' + d.maxFreq)
                    .style("display", "inline-block");
                selected = event.target;
                selected.setAttribute("opacity", 0.8);
            })
            .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                selected.setAttribute("opacity", 1);
            });

        // ----------------- Legend--------------------
        const legend = svg.append("g");

        legend.append("text")
            .attr("x", 65)
            .attr("y", height - margin.bottom * 2)
            .style("text-anchor", "center")
            .style("font-size", "medium")
            .text('Numerical');

        legend.append("text")
            .attr("x", width / 2 + 50)
            .attr("y", height - margin.bottom * 2)
            .style("text-anchor", "center")
            .style("font-size", "medium")
            .text('Categorical');
    }, [])

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <Radio.Group onChange={onChange} value={value} size='large'>
                    <Radio value={1}>Ad</Radio>
                    <Radio value={2}>User</Radio>
                    <Radio value={3}>Media</Radio>
                </Radio.Group>
            </div>

            <div style={{ height: '91%' }} ref={elementRef} >
                <div className="tooltip" ref={tooltipRef}></div>
            </div>
        </>
    );
}

export default DataStatistic;
