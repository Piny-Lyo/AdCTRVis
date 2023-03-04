import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { treesData, linesData, streamData } from '../data/treeModelInfo';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';

function TreeBoosting() {
    const myStore = useLocalObservable(() => store);

    return (
        <Observer>
            {() => <ICicle selectedFeature={myStore.selectedFeature} />}
        </Observer>
    );

}

export default TreeBoosting;

const color = ['#ffd666', '#ffa39e', '#87e8de']; //ad user media

const feature_names = [
    "user_id",
    "task_id",
    "material_id",
    "creative_type",
    "advertiser_id",
    "developer_id",
    "display_type",
    "slot_id",
    "app_id",
    "app_tag",
    "app_first_class",
    "app_second_class",
    "age",
    "city",
    "city_rank",
    "device_name",
    "device_size",
    "career",
    "gender",
    "net_type",
    "residence",
    "app_size",
    "app_release_time",
    "app_score",
    "emui_version",
    "device_release_time",
    "device_price",
    "lifecycle",
    "membership_grade",
    "membership_lifecycle",
    "purchase_tag",
    "daily_active_time",
    "industry_name",
    "display_date"
]

const ad = ['task_id', 'material_id', 'creative_type', 'advertiser_id', 'developer_id', 'display_type', 'industry_name', 'display_date']

const user = ['user_id', 'age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'residence', 'emui_version', 'device_release_time', 'device_price', 'lifecycle', 'membership_grade', 'membership_lifecycle', 'purchase_tag', 'daily_active_time']

const media = ['slot_id', 'app_id', 'app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score']

const getFeatureType = (feature) => {
    if (ad.includes(feature)) return 0; // ad
    if (user.includes(feature)) return 1; //user
    if (media.includes(feature)) return 2; // media
}

function ICicle(props) {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        const textHeight = 20;

        // ------------------Draw the ICicles---------------
        const n = treesData.length; // 聚类中心数量
        const treeSvg = svg.append("g");

        // 创建分区布局
        const partition = d3.partition()
            .size([height / 4, width / n]); // 交换x，y以生成水平布局

        // 循环创建n个icicle
        for (let i = 0; i < n; i++) {
            let tree = treeSvg.append("g")
                .attr("transform", `translate(${i / n * width},0)`);
            drawIcicle(tree, i);
        }

        function drawIcicle(tree, i) {
            let data = treesData[i].tree_structure

            // 绑定数据，并生成层次数据
            let root = d3.hierarchy(data, d => {
                let children = [];
                if (d.left_child) children.push(d.left_child);
                if (d.right_child) children.push(d.right_child);
                return children;
            })
                .sum((d) => d.leaf_count ? d.leaf_count : 0);// 只计算叶子结点数量即可
            //.sort((a, b) => b.height - a.height || b.internal_count - a.internal_count) // 不能按大小来排序，不然就和特征向量的位置对应不上了。也不该用internal_count，这是该节点下包含的总节点数，会重复计算。

            partition(root);
            //console.log("root.descendants()", root.descendants())

            // partition(root
            //     .sum((d) => d.leaf_count ? d.leaf_count : 0) 
            // );

            // 生成rect
            tree.selectAll("rect")
                .data(root.descendants()) //获取所有节点
                .join("rect")
                .attr("transform", d => `translate(${d.y0},${d.x0})`)
                .attr("width", d => d.y1 - d.y0)
                .attr("height", d => d.x1 - d.x0)
                .attr("fill", d => d.height && d.depth ? "lightblue" : "lightgrey") //根和叶子用灰色表示
                .attr("stroke", "white")
                .attr("class", d => feature_names[d.data.split_feature]) // Bind real feature name
                .on("mouseover", (event, d) => {
                    //console.log(event, d);
                    let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + "px")
                        .html(() => {
                            if (d.height) { //非叶子节点
                                return 'Feature:' + feature_names[d.data.split_feature] + '<br>' +
                                    'Depth:' + d.depth + '<br>' +
                                    'Gain:' + d.data.split_gain.toFixed(2) + '<br>'
                            } else {
                                return 'Leaf Count:' + d.data.leaf_count + '<br>' +
                                    'Depth:' + d.depth + '<br>' +
                                    'Value:' + d.data.leaf_value.toFixed(2)
                            }
                        }
                        )
                        .style("display", "inline-block");
                    event.target.setAttribute("fill", color[getFeatureType(feature_names[d.data.split_feature])]);
                    event.target.setAttribute("opacity", 0.8);
                })
                .on("mouseout", (event, d) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    event.target.setAttribute("fill", d.height && d.depth ? "lightblue" : "lightgrey");
                    event.target.setAttribute("opacity", 1);
                });

            // Label
            let hoverText = null;
            tree.append("text")// const central = 
                .attr("x", 25)
                .attr("y", height / 4 + textHeight)
                .text(`Central: Tree${i}`)
                .style("cursor", "default")
                .on("mouseover", (event) => {
                    // let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", xStream(i) + 10 + "px")
                        .style("top", height / 2 + "px")
                        .html('Tree:' + i + '<br>' +
                            'Ad Gains:' + streamData[i].ad.toFixed(2) + '<br>' +
                            'User Gains:' + streamData[i].user.toFixed(2) + '<br>' +
                            'Media Gains:' + streamData[i].media.toFixed(2)
                        )
                        .style("display", "inline-block");
                    hoverText = event.target;
                    hoverText.setAttribute("fill", "steelblue");
                    tree.selectAll("rect")
                        .attr("fill", (d) => d.height ? color[getFeatureType(feature_names[d.data.split_feature])] : "lightgrey")

                    d3.select(`.line_${i}`).attr("stroke", "black");
                })
                .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    hoverText.setAttribute("fill", "black");
                    tree.selectAll("rect")
                        .attr("fill", (d) => d.height && d.depth ? "lightblue" : "lightgrey") //根和叶子用灰色表示
                    d3.select(`.line_${i}`).attr("stroke", "white");
                });

            // TODO: real clusters
            const tempTrees = [5, 10, 21, 23, 25, 28]
            tree.append("text")// const cluster = 
                .attr("x", 22)
                .attr("y", height / 4 + textHeight * 2)
                .style("cursor", "default")
                .text(`Cluster${i + 1} (nums)`) // TODO: 聚类中心的树index
                .on("mouseover", (event) => {
                    let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + 50 + "px")
                        .html(tempTrees.join(','))
                        .style("display", "inline-block");
                    hoverText = event.target;
                    hoverText.setAttribute("fill", "steelblue");
                    tempTrees.forEach(e => d3.select(`.line_${e}`).attr("stroke", "black"));
                })
                .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    hoverText.setAttribute("fill", "black");

                    tempTrees.forEach(e => d3.select(`.line_${e}`).attr("stroke", "white"));
                });

            // const bbox = cluster.node().getBBox(); 太麻烦了，后面看情况再加
        }

        // ------------------Draw the Lines---------------
        const lineSvg = svg.append("g")
            .attr("transform", `translate(0,${height / 4 + textHeight * 2})`);

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(linesData[1], d => d.x)])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(linesData[1], d => d.y)])
            .range([height / 8, 0]);

        // 那颗线，不要也行
        // const line = d3.line()
        //     .x(d => xScale(d.x))
        //     .y(d => yScale(d.y))
        //     .curve(d3.curveBasis);

        // lineSvg.append("path")
        //     .datum(linesData)
        //     .attr("fill", "none")
        //     .attr("stroke", "steelblue")
        //     .attr("stroke-width", 1.5)
        //     .attr("d", line);

        const area = d3.area()
            .x(d => xScale(d.x))
            .y0(yScale(0))
            .y1(d => yScale(d.y))
            .curve(d3.curveBasis);

        lineSvg.append("path")
            .datum(linesData[1]) // leaves
            .attr("fill", "lightgrey")
            .attr("fill-opacity", 0.5)
            .attr("d", area);

        lineSvg.append("path")
            .datum(linesData[0]) //depth
            .attr("fill", "lightblue")
            .attr("fill-opacity", 0.5)
            .attr("d", area);

        lineSvg.append("text")
            .attr("x", width - 160)
            .attr("y", height / 8 + textHeight - 5)
            .style("text-anchor", "center")
            .text('Tree Sequence(0 ~ n-1)');

        lineSvg.append("text")
            .attr("x", 5)
            .attr("y", yScale(linesData[0][0].y)) //height / 8 - 20
            .text('Depth');

        lineSvg.append("text")
            .attr("x", 5)
            .attr("y", yScale(linesData[1][0].y)) //height / 8 - 5
            .text('Leaves');

        // ---------------------Stream---------------------------
        const categories = Object.keys(streamData[0]).slice(1); //  ['ad', 'user', 'media']
        let streamSvg = svg.append("g")
            .attr("transform", `translate(0,${height * 3 / 8 + textHeight * 3})`);

        // Define the color scale
        const colorScale = d3.scaleOrdinal()
            .domain(categories)
            .range(color);

        // Define the stack layout
        let stack = d3.stack()
            .keys(categories)
            .offset(d3.stackOffsetWiggle)
            .order(d3.stackOrderInsideOut)
        //.order(d3.stackOrderDescending)

        let xStream = d3.scaleLinear()
            .domain(d3.extent(streamData, d => d.index))
            .range([0, width]);

        let yStream = d3.scaleLinear()
            .domain(
                [d3.min(stack(streamData), d => d3.min(d, d => d[0])),
                d3.max(stack(streamData), d => d3.max(d, d => d[1]))])
            .range([height / 2 - 10, 0]);

        console.log('stack(streamData):', stack(streamData))

        // Define the area generator
        const streamArea = d3.area()
            .curve(d3.curveBasis)
            .x(d => xStream(d.data.index))
            .y0(d => yStream(d[0]))
            .y1(d => yStream(d[1]));

        // Add the streamgraph layers
        streamSvg.selectAll("path")
            .data(stack(streamData))
            .join("path")
            .attr("d", streamArea)
            .style("fill", d => colorScale(d.key));

        // Add dashes
        const lines = streamSvg.append("g");
        lines.selectAll("line")
            .data(streamData)
            .join("line")
            .attr("class", d => `line_${d.index}`)
            .attr("x1", d => xStream(d.index))
            .attr("y1", (d, i) => yStream(d3.min(stack(streamData), d => d[i][0])))
            .attr("x2", d => xStream(d.index))
            .attr("y2", (d, i) => yStream(d3.max(stack(streamData), d => d[i][1])))
            .attr("stroke", "white")
            .attr("stroke-dasharray", "5 5")
            .on("mouseover", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + 50 + "px")
                    // tooltip
                    //     .style("left", xStream(d.index) + 10 + "px")
                    //     .style("top", height / 2 + 50 + "px")
                    .html('Tree:' + d.index + '<br>' +
                        'Ad Gains:' + d.ad.toFixed(2) + '<br>' +
                        'User Gains:' + d.user.toFixed(2) + '<br>' +
                        'Media Gains:' + d.media.toFixed(2)
                    )
                    .style("display", "inline-block");
                event.target.setAttribute("stroke", "black");
            })
            .on("mouseout", (event) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                event.target.setAttribute("stroke", "white");
            });
    }, [])

    // 更改selectedFeature后联动更新相应rect的颜色类别
    useEffect(() => {
        const feature = props.selectedFeature;
        const rect = d3.select(elementRef.current).selectAll(`.${feature}`);
        rect.attr("fill", color[getFeatureType(feature)]);
    }, [props])

    return (
        <>
            <div style={{ height: '100%' }} ref={elementRef} >
                <div className="tooltip" ref={tooltipRef}></div>
            </div>
        </>
    );
}