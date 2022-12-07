import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useQuery } from 'react-query';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Wrapper, ProgressBarBox, BeerBox, CardBox } from './style';

import StarRate from '../MainPage/StarRate';
import { getBeerList } from '../../api/Beer';
import { Link } from 'react-router-dom';

export default function BeerCard() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (window.location.href.includes('page')) {
      setPage(window.location.href.split('=')[1]);
    }
  });

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
            const AVR_RATE = beerlist.star;

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
            // const BeerID = beerlist.ID;

            return (
              <Link to={`/beers/${beerlist.id}`} key={i}>
                <Card
                  sx={{
                    width: 250,
                    borderRadius: 10,
                    marginBottom: 5,
                    marginRight: 2,
                    boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
                    background: 'linear-gradient(#ffecd2, #fcb69f);',
                  }}
                >
                  <CardHeader
                    title={`${beerlist.name} ${beerlist.alcohol}%`}
                    subheader={beerlist.brand}
                  />
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Beer1"
                    src={beerlist.image}
                    style={{ borderRadius: 125 }}
                  />
                  <StarRate ratesResArr={ratesResArr} star={beerlist.star} />
                  <ProgressBarBox>
                    <div>
                      <ProgressBarBox style={{ width: 200, height: 100, gap: 5 }}>
                        <CircularProgressbarWithChildren value={beerlist.soda} maxValue={5}>
                          <div style={{ fontSize: 12 }}>soda</div>
                        </CircularProgressbarWithChildren>
                        <CircularProgressbarWithChildren value={beerlist.sweet} maxValue={5}>
                          <div style={{ fontSize: 12 }}>sweet</div>
                        </CircularProgressbarWithChildren>
                        <CircularProgressbarWithChildren value={beerlist.afterTaste} maxValue={5}>
                          <div style={{ fontSize: 12 }}>afterTaste</div>
                        </CircularProgressbarWithChildren>
                      </ProgressBarBox>
                    </div>
                  </ProgressBarBox>
                </Card>
              </Link>
            );
          })}
        </Wrapper>
      </CardBox>
    </BeerBox>
  );
}
