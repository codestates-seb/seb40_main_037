import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useQuery } from 'react-query';

import { Wrapper, ProgressBarBox, BeerBox, CardBox } from './style';

import StarRate from '../MainPage/StarRate';
import { getBeerList } from '../../api/Beer';

export default function BeerCard() {
  const [page, setPage] = useState(0);

  const { isLoading, data } = useQuery(['BeerList', { page }], () => {
    return getBeerList(page);
  });

  if (isLoading) return <div>now loading..</div>;

  return (
    <BeerBox>
      <div className="title">Beers</div>
      <div className="title_info">These are beers We know</div>
      <CardBox>
        <Wrapper>
          {data.data.map((beerlist, i) => {
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

            return (
              <Card
                key={i}
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
                  <div>
                    <ProgressBarBox style={{ width: 180, height: 100 }}>
                      <CircularProgressbarWithChildren value={beerlist.sweet}>
                        <div style={{ fontSize: 12 }}>
                          <strong>단맛</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                      <CircularProgressbarWithChildren value={beerlist.bitter}>
                        <div style={{ fontSize: 12 }}>
                          <strong>쓴맛</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                      <CircularProgressbarWithChildren value={beerlist.lv}>
                        <div style={{ fontSize: 12 }}>
                          <strong>LV</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    </ProgressBarBox>
                  </div>
                </ProgressBarBox>
              </Card>
            );
          })}
        </Wrapper>
      </CardBox>
    </BeerBox>
  );
}
