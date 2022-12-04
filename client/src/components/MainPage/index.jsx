import React from 'react';
import { Container, Banner, BeerContent } from './style';
import '../../styles/globalStyle';

import styled from 'styled-components';
import MixCardCarousel from './CardCarousel';
import BeerCard from '../BeerCard';

const CarouseBox = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border: 1px solid blue;
  box-sizing: border-box;
`;

const MainPage = () => {
  return (
    <>
      <Container>
        {/* 배너 */}
        <Banner />

        {/* 추천 카테고리 */}
        <BeerCard />

        {/* Content */}
        <BeerContent>
          <div className="title">Recommend Food</div>
          <div className="title_info">Lorem ipu dimai amdhai amidiadmid</div>
          <MixCardCarousel />
        </BeerContent>
      </Container>
    </>
  );
};

export default MainPage;
