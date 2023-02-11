import { Col, Row, Card } from 'antd';
import './App.css';
import FeatureCorrelation from './components/FeatureCorrelation/FeatureCorrelation';
import FeatureOverview from './components/FeatureOverview/FeatureOverview';
import { Provider } from "mobx-react";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Row>
        <Col span={6}>
          <Card title="Control Panel" style={{ height: '20vh' }}></Card>
          <Card title="Data Overview" style={{ height: '40vh' }}></Card>
        </Col>
        <Col span={12}>
          <Card title="Tree Boosting" className='top'></Card>
        </Col>
        <Col span={6}>
          <Card title="Feature Overview" className='top'>
            <FeatureOverview />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card title="Data Detail" className='bottom'></Card>
        </Col>
        <Col span={12}>
          <Card title="Data Flow" className='bottom'></Card>
        </Col>
        <Col span={6}>
          <Card title="Feature Correlation" className='bottom'>
            <FeatureCorrelation />
          </Card>
        </Col>
      </Row>
    </Provider>

  );
}

export default App;
