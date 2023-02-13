import { Col, Row, Card } from 'antd';
import './App.css';
import FeatureCorrelation from './components/FeatureCorrelation';
import FeatureOverview from './components/FeatureOverview';
import DataOverview from './components/DataOverview';
import DataList from './components/DataList';
import { Provider } from "mobx-react";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Row>
        <Col span={6}>
          <Card title="Control Panel" style={{ height: '15vh' }}></Card>
          <Card title="Data Overview" style={{ height: '50vh' }}>
            <DataOverview />
          </Card>
        </Col>
        <Col span={13}>
          <Card title="Tree Boosting and Flow" className='top'></Card>
        </Col>
        <Col span={5}>
          <Card title="Feature Importance" className='top'>
            <FeatureOverview />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card title="Data Statistic" className='bottom'></Card>
        </Col>
        <Col span={13}>
          <Card title="Data List" className='bottom'>
            <DataList />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="Feature Correlation" className='bottom'>
            <FeatureCorrelation />
          </Card>
        </Col>
      </Row>
    </Provider>

  );
}

export default App;
