import { Table } from 'antd';
import { columns, dataListData } from '../data/dataList';
import '../styles/dataList.css'

function DataList() {

    return (
        <Table columns={columns} dataSource={dataListData}
            size='small' pagination={false}
            scroll={{
                x: 2500,
                y: 220,
            }} />
    );

}
export default DataList;