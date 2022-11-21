import React from 'react';

import Errorpage from '../components/Error';
import Layout from '../components/Layout';

const Error = () => {
  return (
    <Layout isHeader={false}>
      <Errorpage />
    </Layout>
  );
};

export default Error;
