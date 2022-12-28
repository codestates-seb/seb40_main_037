import React, { useState } from 'react';
import styled from 'styled-components';
// 스타일 컴포넌트
import { CardTime } from '../../MixFoodCardList/style';
import { relTimeFormat } from '../../../util/convertor';
//  MUI 라이브러리
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton';

export default function ReviewItem({ review }) {
  if (!review) return null;

  const [likes, setLikes] = useState(0);
  return (
    <li className="reviewList" key={review.id}>
      <LeftBox>
        <div className="profile">
          <img src={review.avatar} />
          <p className="userName">{review.name}</p>
        </div>
        <Rating className="rating-star" value={Number(review.score)} size="large" readOnly />
      </LeftBox>
      <RightBox>
        <CardTime>
          {review.modified !== null ? (
            <h1>{relTimeFormat(review.modified)} 수정됨</h1>
          ) : (
            <h1>{relTimeFormat(review.createdAt)} 생성됨 </h1>
          )}
        </CardTime>
        <ToggleButton
          key={review.id}
          className="goodVoteButton"
          value="check"
          color="error"
          selected={false}
          onChange={() => {}}
          e
        >
          <FavoriteIcon />
          <h2>{review.likeCount}</h2>
        </ToggleButton>
      </RightBox>
      <ImageList
        sx={{ width: 500, height: 500 }}
        cols={5}
        rowHeight={'auto'}
        gap={10}
        className="imageItemBox"
      >
        {review.photo &&
          review.photo.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
      <div className="commentBox">{review.content}</div>
    </li>
  );
}

const LeftBox = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  display: flex;
`;
