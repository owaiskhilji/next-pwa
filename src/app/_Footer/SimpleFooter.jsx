import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const SimpleFooter = () => (
  <Layout>
    <Footer style={{ textAlign: 'center' }}>
      ©2024 Your Company Name. All Rights Reserved.
    </Footer>
  </Layout>
);

export default SimpleFooter;
