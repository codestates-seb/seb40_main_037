import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

const CarouseBox = styled.div`
  width: 80%;
  height: 800px;
  margin: 0 auto;
  border: 1px solid blue;
  box-sizing: border-box;
`;

function BeerCard(props) {
  var items = [
    {
      img: '../src/assets/food/ramen.jpg',
      title: 'ramen',
    },
    {
      img: '../src/assets/food/pizza.jpg',
      title: 'pizza',
    },
    {
      img: '../src/assets/food/chicken.jpg',
      title: 'ramen',
    },
  ];

  return (
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
        {items.map((item, i) => (
          <div key={i} style={{ width: '100%', height: '300px' }}>
            <img src={item.img} style={{ width: '33%', height: 'auto' }} />
            <img src={item.img} style={{ width: '33%', height: 'auto' }} />
            <img src={item.img} style={{ width: '33%', height: 'auto' }} />
          </div>
        ))}
      </Carousel>
    </CarouseBox>
  );
}

export default BeerCard;
