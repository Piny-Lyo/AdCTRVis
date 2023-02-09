import { Col, Row, Card } from 'antd';
import './App.css';
import FeatureCorrelation from './components/FeatureCorrelation/FeatureCorrelation';

function App() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Card title="控制面板" style={{ height: '20vh' }}></Card>
          <Card title="数据概览" style={{ height: '40vh' }}></Card>
        </Col>
        <Col span={12}>
          <Card title="提升树模型" className='top'></Card>
        </Col>
        <Col span={6}>
          <Card title="特征重要性" className='top'></Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card title="数据详情" className='bottom'></Card>
        </Col>
        <Col span={12}>
          <Card title="数据流" className='bottom'></Card>
        </Col>
        <Col span={6}>
          <Card title="特征关联" className='bottom'>
            <FeatureCorrelation />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
