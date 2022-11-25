import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import StarRate from './StarRate';
import ProgressBar from './ProgressBar';
import { Wrapper, ProgressBarBox } from './style';
import Beer1 from '../../assets/beer/beer1.png';
import dummy from "../../../data/dummy.json";


export default function TrandingBeer() {

  return (
    <Wrapper>
      {dummy.beerlist.map((beerlist) => (      
      <Card sx={{
        maxWidth: 300,
        borderRadius: 10,
        marginBottom: 5,
        marginRight: 2,
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
        background: "linear-gradient(#ffecd2, #fcb69f);"
        }}>
        <CardHeader
          title={beerlist.title}
          subheader={beerlist.brand}
        />
        <CardMedia
          component="img"
          height="250"
          alt="Beer1"
          img src={Beer1}
          style={{borderRadius: 125}}
        />
        <StarRate />
        <ProgressBarBox>
          <ProgressBar />
        </ProgressBarBox>
      </Card>
      ))};
    </Wrapper>    
  );
}