import * as React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import dummy from '../../../data/data.json';
import { red } from '@mui/material/colors';

const ProductInfoBox = styled.div`
  width: 70%;
  margin: 30px auto;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #ffe2bc;
`;
const ProductionButton = styled.button`
  /* background-color: gold; */
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 50px;
  width: 130px;
  height: 40px;
  vertical-align: top;
  margin: 10px 10px;
  font-weight: bold;
  font-size: 20px;
`;

export default function ProductInformation() {
  const [value, setValue] = React.useState(0);
  return (
    <ProductInfoBox>
      {dummy.items.map(item => {
        return (
          <div>
            <Rating className="rating-star" value={item.rating} size="large" readOnly />
            {item.tags &&
              item.tags.map((tag, i) => {
                return <ProductionButton key={tag[i]}>{tag}</ProductionButton>;
              })}
            <Rating
              className="heartIcon"
              value={value}
              max={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </div>
        );
      })}
    </ProductInfoBox>
  );
}
