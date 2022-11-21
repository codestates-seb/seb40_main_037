import React from 'react';
import styled from 'styled-components';
import MyReviewBox from '../components/Mypage/MyReviewBox';
import Profile from '../components/Mypage/Profile';

const Wrapper = styled.div`
  width: 100%;
  height: 8000px;
  background-color: gold;
`;

const Mypage = () => {
  return (
    <Wrapper>
      <Profile />
      <MyReviewBox />
    </Wrapper>
  );
};

export default Mypage;
