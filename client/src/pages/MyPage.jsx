import React from 'react';
import styled from 'styled-components';
import MyReviewBox from '../components/Mypage/MyReviewBox';
import Profile from '../components/Mypage/Profile';
import Layout from '../components/Layout';
import MixCardCarousel from '../components/MainPage/CardCarousel';
const Wrapper = styled.div`
  width: 100%;
`;

const Mypage = () => {
  return (
    <Layout>
      <Wrapper>
        <Profile />
        <MyReviewBox />
        <MixCardCarousel />
      </Wrapper>
    </Layout>
  );
};

export default Mypage;
