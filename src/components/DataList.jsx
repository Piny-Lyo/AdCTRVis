import '../styles/dataList.css';
import * as d3 from 'd3';
import { Table } from 'antd';
import { columns } from '../data/dataList';
import { data5000 } from '../data/dataListData5000';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
import { useEffect } from 'react';

function DataList() {
    const myStore = useLocalObservable(() => store);
    return (
        <Observer>{() =>
            <MyTable keys={myStore.keys} store={myStore}></MyTable>
        }
        </Observer>
    )
}
export default DataList;

function MyTable(props) {
    const myStore = props.store;
    const keys = props.keys;

    const color = d3.interpolateBrBG;

    let data = [];
    if (keys) {
        data5000.forEach(d => {
            if (keys.includes(d.key)) data.push(d);
        })
    }

    useEffect(() => {
        const firstCol = d3.selectAll('.probability');
        const firstCols = firstCol._groups[0];
        //console.log('col', firstCol, firstCols)
        for (let i = 1; i < firstCols.length; i++) {
            let e = firstCols[i];
            let probability = Number(e.innerText);
            e.setAttribute("style", `text-align: center; background-color: ${color(probability)}`);
        }
    })

    return (
        <Table columns={columns} dataSource={data}
            size='small' pagination={false}
            scroll={{
                x: 2800,
                y: 220,
            }}
            onRow={() => {
                return {
                    onClick: (event) => { // 点击行
                        const sample = event.target.innerText;
                        myStore.setSample(sample);
                        console.log('sample:', myStore.sample);
                    }
                };
            }}
        />
    );
}