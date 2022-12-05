import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton';
import dummy from '../../../data/data.json';

export default function HeaertVoteButton() {
  const [selected, setSelected] = React.useState(false);
  const reviewHeart = dummy.reviews.map(review => review.good);
  console.log(reviewHeart);
  return (
    <ToggleButton
      className="goodVoteButton"
      value="check"
      color="error"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <FavoriteIcon />
      <h2>{reviewHeart}</h2>
    </ToggleButton>
  );
}
