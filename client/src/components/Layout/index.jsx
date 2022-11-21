import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderBottom from '../Header-Bottom';
import { Container } from './style';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
      <HeaderBottom />
    </>
  );
};

export default Layout;
