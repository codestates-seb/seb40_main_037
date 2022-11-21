import React, { useState } from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import subBanner from '../../assets/subpage/subbanner1.png';
//  MUI 라이브러리
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// 기능 컴포넌트
import './itemStyle.css';
import ProductInformation from './ProductInformation';
import HeaertVoteButton from './HeaertVoteButton';
import MyReviewForms from './MyReivewForms';
import FiliterButtons from './FilterButtons';
// 스타일 컴포넌트
const Wrapper = styled.div`
  width: 100%;
`;
const Banner = styled.div`
  width: 100%;
  height: 800px;
  background: url(${subBanner});
  background-size: 100% 100%;
`;

const ReviewsBox = styled.div`
  width: 70%;
  margin: 20px auto;
  ul {
    width: 100%;
    height: auto;
  }
  .reviewList {
    width: 100%;
    margin: 30px 0;
    border: 1px solid blue;
    background-color: #f6f6f6;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
  .profile {
    border: 1px solid blue;
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .commentBox {
    width: 100%;
    margin: 10px 0;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  }
`;

function Item() {
  const [value, setValue] = useState(3);

  return (
    <Wrapper>
      <Banner />
      <ProductInformation />
      <FiliterButtons />
      <ReviewsBox>
        <ul>
          {dummy.reviews.map(review => {
            return (
              <li className="reviewList" key={review.id}>
                <div className="profile">
                  <img src={review.avatar} />
                  <p className="userName">{review.name}</p>
                </div>
                <Rating className="rating-star" value={review.value} size="large" readOnly />
                <p>{review.createdAt}</p>
                <HeaertVoteButton />
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
                <div className="commentBox">{review.comment}</div>
              </li>
            );
          })}
        </ul>
      </ReviewsBox>
      <MyReviewForms />
    </Wrapper>
  );
}

export default Item;
