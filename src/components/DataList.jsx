import '../styles/dataList.css';
import { Table } from 'antd';
import { columns } from '../data/dataList';
//import { dataListData } from '../data/dataListData';
import { data5000 } from '../data/dataListData5000';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';

function DataList() {
    const myStore = useLocalObservable(() => store);

    return (
        <Observer>{() =>
            <MyTable keys={myStore.keys}></MyTable>
        }
        </Observer>
    )
}
export default DataList;

function MyTable(props) {
    const keys = props.keys;
    let data = [];
    if (keys) {
        data5000.forEach(d => {
            if (keys.includes(d.key)) data.push(d);
        })
    }
    return (
        <Table columns={columns} dataSource={data}
            size='small' pagination={false}
            scroll={{
                x: 2500,
                y: 220,
            }} />
    );
}