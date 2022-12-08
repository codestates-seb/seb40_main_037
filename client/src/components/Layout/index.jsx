import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderBottom from '../HeaderBottom';
import { Container } from './style';

const Layout = ({ children, isHeader = true }) => {
  return (
    <>
      <Header isHeader={isHeader} />
      <Container className={window.location.href.includes('mypage') ? 'Mypage' : 'Pages'}>
        {children}
      </Container>
      <Footer />
      <HeaderBottom isHeaderBottom={isHeader} />
    </>
  );
};

export default Layout;
