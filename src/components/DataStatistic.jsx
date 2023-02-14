import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
// import { cat_index, num_index, cat, num } from '../data/dataStatistic';
import { dataListData } from '../data/dataList';

function DataStatistic() {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        //const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        const margin = { top: 30, right: 30, bottom: 30, left: 30 };
        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        // 导入数据
        const data = dataListData;

        // 提取数值列
        const values = data.map(d => d.emui_version);

        console.log(values);

        // 定义x轴比例尺
        const x = d3.scaleLinear()
            .domain([d3.min(values), d3.max(values)])
            .range([margin.left, width - margin.right]);

        const y_axis = height / 2;

        // ----------画小提琴背景----------

        // 计算核密度估计函数
        const density = kernelDensityEstimator(epanechnikov(4), x.ticks((d3.max(values) - d3.min(values)) * 2))(values);
        console.log(density)

        // 定义y轴比例尺
        const y = d3.scaleLinear()
            .domain([0, d3.max(density, d => d[1])])
            .range([y_axis, margin.top]);

        const y_sym = d3.scaleLinear()
            .domain([0, d3.max(density, d => d[1])])
            .range([y_axis, height - margin.bottom]);

        // TODO:把下面这些抽成函数

        // 定义小提琴图形状
        const area = d3.area()
            .x(d => x(d[0]))
            .y0(y(0))
            .y1(d => y(d[1]))
        //.curve(d3.curveCatmullRom);

        const area_sym = d3.area()
            .x(d => x(d[0]))
            .y0(y(0))
            .y1(d => y_sym(d[1]))

        // 绘制小提琴图
        svg.append("path")
            .datum(density)
            //.attr("class", "area")
            .attr("d", area)
            .attr("fill", "lightblue");

        svg.append("path")
            .datum(density)
            //.attr("class", "area")
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
        const [min, max] = d3.extent(values);
        const q1 = d3.quantile(values, 0.25); //下四分位数
        const q2 = d3.quantile(values, 0.5);
        const q3 = d3.quantile(values, 0.75); //上四分位数

        const iqr = q3 - q1; // 四分位距（interquartile range, IQR）
        const minLimit = q1 - 1.5 * iqr; // 下限
        const maxLimit = q3 + 1.5 * iqr; // 上限
        const outliers = values.filter(d => d < minLimit || d > maxLimit);

        const newValues = values.filter(d => !outliers.includes(d));
        const [newMin, newMax] = d3.extent(newValues);

        console.log(q1, q2, q3, min, max, minLimit, maxLimit, outliers)

        const boxHeight = 50;
        // 绘制箱子
        svg.append("rect")
            .attr("x", x(q1))
            .attr("y", y_axis - boxHeight / 2)
            .attr("width", x(q3) - x(q1))
            .attr("height", boxHeight)
            .attr("fill", "lightgrey");

        // 绘制中位线
        svg.append("line")
            .attr("x1", x(q2))
            .attr("y1", y_axis - boxHeight / 2)
            .attr("x2", x(q2))
            .attr("y2", y_axis + boxHeight / 2)
            .attr("stroke", "grey");

        // 绘制上下边缘 (去除outlier之后的最大最小值)
        svg.append("line")
            .attr("x1", x(newMin))
            .attr("y1", y_axis)
            .attr("x2", x(q1))
            .attr("y2", y_axis)
            .attr("stroke", "grey");
        svg.append("line")
            .attr("x1", x(q3))
            .attr("y1", y_axis)
            .attr("x2", x(newMax))
            .attr("y2", y_axis)
            .attr("stroke", "grey");

        // 绘制异常值
        svg.selectAll("circle")
            .data(outliers)
            .join("circle")
            .attr("cx", d => x(d))
            .attr("cy", y_axis)
            .attr("r", 3)
            .attr("fill", "grey");
    })

    return (
        <div style={{ height: '100%' }} ref={elementRef} >
            <div className="tooltip" ref={tooltipRef}></div>
        </div>
    );
}

export default DataStatistic;
