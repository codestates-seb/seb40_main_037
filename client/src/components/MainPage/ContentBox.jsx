import * as React from 'react';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ContentBox() {
    const [value, setValue] = React.useState(0);

    return (
      <ImageList
      cols={2}
      rowHeight={'auto'}
      gap={0}>
      {beerbox.map((item) => (
        <ImageListItem key={item.img}>
          <ImageListItemBar
            title={item.title}
            position="below"
          />
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Box sx={{ '& button': { m: 1 } }} direction="row">
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="small">
              Small
            </Button>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
    );
  }



const beerbox = [
    {
        title: "혼술이 땡긴다 나라면 이거 먹을듯",
        img: "../src/assets/1.png"
    },
    {
        id: 2,
        title: "애인한테 술 잘사왔다고 칭찬받고 싶다면?",
        img: "../src/assets/1.png"
    },
    {
        id: 3,
        title: "스포츠 경기는 이 맥주와 함께",
        img: "../src/assets/1.png"
    },
    {
        id: 4,
        title: "운영자가 추천하는 이달의 맥주",
        img: "../src/assets/1.png"
    }
]