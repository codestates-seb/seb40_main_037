import React from 'react';
import { Container, Banner, BeerBox, CardBox, BeerContent } from './style';
import "../../styles/globalStyle";

import TrandingBeer from "./TrandingBeer";
import MixFoodCardList from '../MixFoodCardList';


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
                    <TrandingBeer />
                    <TrandingBeer />
                    <TrandingBeer />
                    <TrandingBeer />
                </CardBox>
            </BeerBox>

            {/* Content */}
            <BeerContent>                
                <MixFoodCardList />
            </BeerContent>
        </Container>
    </>
}

export default MainPage;