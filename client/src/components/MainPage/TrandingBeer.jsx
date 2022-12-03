import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import StarRate from './StarRate';
import ProgressBar from './ProgressBar';
import { Wrapper, ProgressBarBox } from './style';

import dummy from '../../../data/dummy.json';

export default function TrandingBeer() {
  return (
    <Wrapper>
      {dummy.beerlist.map(beerlist => {
        const AVR_RATE = beerlist.rating;

        const calcStarRates = AVR_RATE => {
          let tempStarRatesArr = [0, 0, 0, 0, 0];
          let starVerScore = (AVR_RATE * 70) / 100;
          let idx = 0;
          while (starVerScore > 14) {
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
          }
          tempStarRatesArr[idx] = starVerScore;
          return tempStarRatesArr;
        };

        const ratesResArr = calcStarRates(AVR_RATE);

        console.log(ratesResArr);

        return (
          <Card
            sx={{
              maxWidth: 300,
              borderRadius: 10,
              marginBottom: 5,
              marginRight: 2,
              boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
              background: 'linear-gradient(#ffecd2, #fcb69f);',
            }}
          >
            <CardHeader title={beerlist.title} subheader={beerlist.brand} />
            <CardMedia
              component="img"
              height="250"
              alt="Beer1"
              src={beerlist.img}
              style={{ borderRadius: 125 }}
            />
            <StarRate ratesResArr={ratesResArr} />
            <ProgressBarBox>
              <ProgressBar />
            </ProgressBarBox>
          </Card>
        );
      })}
    </Wrapper>
  );
}
