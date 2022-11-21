import React from 'react';
import { Container, Banner, BeerBox, BeerTmi, BeerContent } from './style';
import "../../styles/globalStyle";

import ContentBox from "./ContentBox";
// import BeerContent from './BeerContent';


const MainPage = () => {
    return <>
        <Container>
            {/* 배너 */}
            <Banner />

            {/* 추천 카테고리 */}
            <BeerBox>                
                <ContentBox></ContentBox>                    
            </BeerBox>

            {/* TMI */}
            <BeerTmi>
                <div>
                    <span className='top_text'>맥주에 대한 TMI</span>
                    <span className='bottom_text'>알고 계셨나요? 맥주는 고대 이집트에서부터 마시기 시작했습니다.</span>
                </div>
            </BeerTmi>

            {/* Content */}
            <BeerContent>                
                {/* <div>
                    <span className='title'>Expériences très bien notées</span>
                    <span>info</span>
                </div>
                <ul>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                    <li>
                        <img></img>
                        <span>country</span>
                        <span>small_title</span>                        
                        <span>price</span>
                        <span>rating</span>
                    </li>
                </ul> */}
            </BeerContent>
        </Container>
    </>
}

export default MainPage;