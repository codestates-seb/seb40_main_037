import React from 'react';
import { Container, Banner, BeerBox, CardBox, BeerContent } from './style';
import "../../styles/globalStyle";

import TrandingBeer from "./TrandingBeer";
import MixFoodCardList from '../MixFoodCardList';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

const CarouseBox = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border: 1px solid blue;
  box-sizing: border-box;
`

const MainPage = () => {    
    return <>
        <Container>
            {/* 배너 */}
            <Banner />

            {/* 추천 카테고리 */}
            <BeerBox>
                <div className='title'>Tranding Beer</div>
                <div className='title_info'>LOREM IPU DIMAI AMDHAI AMIDIADMID</div>
                <CardBox>
                    <TrandingBeer />
                </CardBox>
            </BeerBox>

            {/* Content */}
            <BeerContent>
                <div className='title'>Recommend Food</div>
                <div className='title_info'>Lorem ipu  dimai amdhai amidiadmid</div>
                <CarouseBox>
                    <Carousel
                        animation="slide"
                        duration="1000"
                        swipe="true"
                        navButtonsAlwaysVisible
                        navButtonsProps={{
                        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                        style: {
                            backgroundColor: 'cornflowerblue',
                        },
                        }}
                    >
                    <MixFoodCardList />
                    </Carousel>
                </CarouseBox>
            </BeerContent>
        </Container>
    </>
}

export default MainPage;