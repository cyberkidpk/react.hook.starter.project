import React from 'react';
import { Row, Col, Card } from 'antd';
import LoadingARVR from '../app-components/Loading.AR.VR';
import './layout.index.css';

const SplashARVRLayout = () => {

  return (
    <Row className="vh100 ">
      <Col className="vh100 justCentAlCent" span={24}>
        <Card title="Part of Amgen?" style={{ width: 300, textAlign: 'center' }}>
          <LoadingARVR />
        </Card>
      </Col>
    </Row>
  );
};
export default SplashARVRLayout;
