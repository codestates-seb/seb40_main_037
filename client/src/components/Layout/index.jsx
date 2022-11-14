import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Container } from './style';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
