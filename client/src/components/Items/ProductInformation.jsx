import * as React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

const ProductInfoBox = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid blue;
`;
const ProductionButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 50px;
  width: 130px;
  height: 40px;
  vertical-align: top;
  margin: 10px 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export default function ProductInformation() {
  const [value, setValue] = React.useState(0);
  return (
    <ProductInfoBox>
      <Rating className="rating-star" value={value.toString()} size="large" defaultValue={3} />
      <ProductionButton bgColor="pink">복숭아향</ProductionButton>
      <ProductionButton bgColor="red">BITTER</ProductionButton>
      <ProductionButton bgColor="skyblue">4.5도</ProductionButton>
      <Rating
        className="heartIcon"
        value={value.toString()}
        max={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </ProductInfoBox>
  );
}
