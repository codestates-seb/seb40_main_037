import React from 'react';
import styled from 'styled-components';

const BeerCardBox = styled.div`
  width: 100%;
  background-color: skyblue;
  padding: 50px 0;
  text-align: center;
`;

const BeerTitle = styled.h1`
  color: white;
`;

const MyBeerCardBox = styled.div`
  width: 100%;
  background-color: gold;
  border: 1px solid blue;
  display: flex;
`;

const MyBeerCard = styled.div`
  width: 25%;
  height: 300px;
  border: 1px solid blue;
`;

function BeerCard() {
  return (
    <BeerCardBox>
      <BeerTitle>Hi im</BeerTitle>
      <MyBeerCardBox>
        <MyBeerCard></MyBeerCard>
        <MyBeerCard></MyBeerCard>
        <MyBeerCard></MyBeerCard>
        <MyBeerCard></MyBeerCard>
      </MyBeerCardBox>
    </BeerCardBox>
  );
}

export default BeerCard;
