import React from 'react';

import Introitem from '../components/Intro';
import Layout from '../components/Layout';

const Intro = () => {
  return (
    <Layout isHeader={false}>
      <Introitem />
    </Layout>
  );
};

export default Intro;
