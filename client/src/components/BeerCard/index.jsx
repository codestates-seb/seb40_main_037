import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { Wrapper, ProgressBarBox, BeerBox, CardBox } from './style';

import StarRate from '../MainPage/StarRate';

import dummy from '../../../data/dummy.json';

export default function BeerCard() {
  return (
    <BeerBox>
      <div className="title">Tranding Beer</div>
      <div className="title_info">LOREM IPU DIMAI AMDHAI AMIDIADMID</div>
      <CardBox>
        <Wrapper>
          {dummy.beerlist.map((beerlist, i) => (
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
              <StarRate rate={beerlist.rating} />
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
          ))}
        </Wrapper>
      </CardBox>
    </BeerBox>
  );
}
