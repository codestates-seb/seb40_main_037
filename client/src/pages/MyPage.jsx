import React from 'react';
import styled from 'styled-components';
import BeerCard from '../components/Mypage/BeerCards';
import MyReviewBox from '../components/Mypage/MyReviewBox';
import Profile from '../components/Mypage/Profile';
import Layout from '../components/Layout';
const Wrapper = styled.div`
  width: 100%;
`;

const Mypage = () => {
  return (
    <Layout>
      <Wrapper>
        <Profile />
        <MyReviewBox />
        <BeerCard />
      </Wrapper>
    </Layout>
  );
};

export default Mypage;
