import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderBottom from '../Header-Bottom';
import { Container } from './style';

const Layout = ({ children, isHeader = true }) => {
  return (
    <>
      <Header isHeader={isHeader} />
      <Container>{children}</Container>
      <Footer />
      <HeaderBottom isHeaderBottom={isHeader} />
    </>
  );
};

export default Layout;
