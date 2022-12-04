import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

import MixFoodCardList from '../MixFoodCardList';

const CarouseBox = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;

function BeerCard(props) {  
  return (
    <CarouseBox>
      <Carousel sx={{
        height: 350
        }}
        animation="slide"
        duration="2000"
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
        <MixFoodCardList />
      </Carousel>
    </CarouseBox>
  );
}

export default BeerCard;
