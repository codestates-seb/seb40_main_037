import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import StarRate from './StarRate';
import ProgressBar from './ProgressBar';
import { ProgressBarBox } from './style';
import Beer1 from '../../assets/beer/beer1.png';
import dummy from "../../../data/dummy.json";



export default function TrandingBeer() {

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 10 }}>
      <CardHeader
        title="Hand & Malt"
        subheader="브랜드"
      />
      <CardMedia
        component="img"
        height="250"
        alt="Beer1"
        img src={Beer1}
      />
      <div>
        <StarRate />
      </div>
      <ProgressBarBox>
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </ProgressBarBox>
    </Card>
  );
}