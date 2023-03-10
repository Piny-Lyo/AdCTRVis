
import { InputNumber, Row, Col, TreeSelect } from 'antd';
import { selectData } from '../data/dataList';
import { useState } from 'react';

function ControlPanel() {

    const [value, setValue] = useState();

    const style = {
        padding: '12px 6px', //top&bottom left&right
        display: 'flex',
        alignItems: 'center',//cross axis
        justifyContent: 'center'//main axis (default row)
    };
    const onChange = (value) => {
        console.log('changed', value);
    };

    const treeData = [
        {
            value: 'Ad',
            title: (<b style={{ color: '#ffa39e' }}>Ad</b>),
            children: selectData[0]
        },
        {
            value: 'User',
            title: (<b style={{ color: '#ffd666' }}>User</b>),
            children: selectData[1]
        },
        {
            value: 'Media',
            title: (<b style={{ color: '#87e8de' }}>Media</b>),
            children: selectData[2]
        },
    ];

    return (
        <>
            <Row gutter={16}>
                <Col className="gutter-row" span={11}>
                    <div style={style}>
                        <InputNumber addonBefore={'Max Tree Depth'} min={1} max={20} defaultValue={-1} onChange={onChange} style={{ width: '190px' }} />
                    </div>
                </Col>
                <Col className="gutter-row" span={13}>
                    <div style={style}>
                        <InputNumber addonBefore={'Max Number of Leaves'} min={1} max={63} defaultValue={31} onChange={onChange} /></div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={11}>
                    <div style={style}>
                        <InputNumber addonBefore={'Tree Clusters (K)'} min={1} max={9} defaultValue={6} onChange={onChange} style={{ width: '190px' }} />
                    </div>
                </Col>
                <Col className="gutter-row" span={13}>
                    <div style={style}>
                        {/* <InputNumber addonBefore={'Unselected Features'} min={1} max={9} defaultValue={6} onChange={onChange} style={{ width: '220px' }} /> */}
                        <TreeSelect
                            showSearch
                            style={{ width: '100%' }}
                            value={value}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            placeholder="Select features to be removed"
                            allowClear
                            multiple
                            onChange={(newValue) => {
                                console.log(newValue);
                                setValue(newValue);
                            }}
                            treeData={treeData}
                        />
                    </div>
                </Col>
            </Row>

        </>
    );

}
export default ControlPanel;
