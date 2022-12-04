import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';

const Main = () => {
  if (!localStorage.getItem('isadult')) return <Navigate to="/intro" />;
  else
    return (
      <Layout>
        <MainPage></MainPage>
      </Layout>
    );
};

export default Main;
