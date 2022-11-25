import React from 'react';
import { Container, Banner, BeerBox, CardBox, BeerContent } from './style';
import "../../styles/globalStyle";

import TrandingBeer from "./TrandingBeer";
import dummy from "../../../data/dummy.json";
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
                </CardBox>
            </BeerBox>

            {/* Content */}
            <BeerContent>
            </BeerContent>
        </Container>
    </>
}

export default MainPage;