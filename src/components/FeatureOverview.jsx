import { Table, Image } from 'antd';
import myImage from '../data/pictures/PDP_ICE_demo.png';
import featureOverviewData from '../data/featureOverviewData';
// eslint-disable-next-line
import { Observer, useLocalObservable, MobXProviderContext } from 'mobx-react';
// eslint-disable-next-line
import { useEffect, useContext } from 'react';
import { store as s1 } from '../store/store';
import { tableData } from '../data/dataList';



const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        filters: [
            {
                text: 'Ad',
                value: 'Ad',
                children: tableData[0]
            },
            {
                text: 'User',
                value: 'User',
                children: tableData[1]
            },
            {
                text: 'Media',
                value: 'Media',
                children: tableData[2]
            }
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.name.includes(value),
        width: '25%',
    },
    {
        title: 'Score',
        dataIndex: 'importance',
        align: 'center',
        sorter: (a, b) => a.importance - b.importance,
    },
    {
        title: 'PDP and ICE',
        dataIndex: 'name',
        align: 'center',
        width: '55%',
        render: () => (
            <Image width={200} src={myImage} />
        ),
    },
];
// const onChange = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
// };
// onChange = { onChange }
function FeatureOverview() {
    // const store = useContext(MobXProviderContext).store;
    const store = useLocalObservable(() => s1);
    // console.log(store, store.selectedFeature, store.setSelectedFeature);
    // why??? don't work
    // useEffect(() => {
    //     console.log('in overview Effect', store.selectedFeature)
    // })

    return (
        <Observer>{() =>
            <Table columns={columns} dataSource={featureOverviewData}
                size='small' pagination={false} scroll={{ y: 560 }}
                onRow={() => {
                    return {
                        onClick: (event) => { // 点击行
                            console.log('event', event, event.target.innerText);
                            store.setSelectedFeature(event.target.innerText);
                            //store.selectedFeature = event.target.innerText;
                            console.log(store.selectedFeature)
                        }
                    };
                }} />}
        </Observer>
    );


}
export default FeatureOverview;