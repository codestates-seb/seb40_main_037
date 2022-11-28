import * as React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/redux/favorites';
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
  const favoriteMealIds = useSelector(state => state.favoriteMeal.ids);
  const dispatch = useDispatch();
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }
  return (
    <ProductInfoBox>
      <Rating className="rating-star" value={value} size="large" defaultValue={3} />
      <ProductionButton bgColor="pink">복숭아향</ProductionButton>
      <ProductionButton bgColor="red">BITTER</ProductionButton>
      <ProductionButton bgColor="skyblue">4.5도</ProductionButton>
      <IconButton
        icon={mealIsFavorite ? 'star' : 'star-outline'}
        color="white"
        onPress={changeFavoriteStatusHandler}
      />
      <Rating
        className="heartIcon"
        value={value}
        max={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </ProductInfoBox>
  );
}
