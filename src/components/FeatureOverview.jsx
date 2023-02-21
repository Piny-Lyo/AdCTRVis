import { Table, Image } from 'antd';
import myImage from '../data/pictures/PDP_ICE_demo.png';
import featureOverviewData from '../data/featureOverviewData';
import { useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
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

function FeatureOverview() {
    const myStore = useLocalObservable(() => store);

    return (
        <Table columns={columns} dataSource={featureOverviewData}
            size='small' pagination={false} scroll={{ y: 560 }}
            onRow={() => {
                return {
                    onClick: (event) => { // 点击行
                        const clickedFeature = event.target.innerText;
                        myStore.setSelectedFeature(clickedFeature);
                        console.log('selectedFeature:', myStore.selectedFeature);
                    }
                };
            }} />
    );
}
export default FeatureOverview;