import React from 'react';
import { Navigate } from 'react-router-dom';

import Introitem from '../components/Intro';
import Layout from '../components/Layout';

const Intro = () => {
  if (localStorage.getItem('isadult')) return <Navigate to="/" />;
  return (
    <Layout isHeader={false}>
      <Introitem />
    </Layout>
  );
};

export default Intro;
