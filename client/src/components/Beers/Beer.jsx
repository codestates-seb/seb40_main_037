import React, { useState } from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// 기능 컴포넌트
import './beerStyle.css';
import ProductInformation from './ProductInformation';
import MyReviewForms from './MyReivewForms';
import FiliterButtons from './FilterButtons';

// BEERLIST
import { BeerListDetail, BeerReviewList } from '../../util/fetchBeer';
import ReviewItem from './ReviewItem';

const Wrapper = styled.div`
  width: 100%;
`;
const Banner = styled.div`
  width: 100%;
  height: 800px;
  background: url(${props => props.background}) no-repeat top center;
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
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
    background-color: #ffeedd;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
  .profile {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    text-align: center;
    img {
      border-radius: 10px;
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

const DescriptionBox = styled.div`
  background-color: #fff8cd;
  color: black;
  width: 70%;
  margin: 30px auto;
  padding: 30px 30px;
  line-height: 1.5rem;
  border-radius: 30px;
`;
function Beer() {
  const [update, setUpdate] = useState(true);

  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [reviews, setReviews] = useState();

  const getBeerDetail = id => {
    BeerListDetail(id).then(res => {
      setInfo(res);
    });
  };

  const getBeerReview = id => {
    BeerReviewList(id).then(res => {
      setReviews(res);
    });
  };

  useEffect(() => {
    if (update) {
      getBeerReview(id);
      getBeerDetail(id);
      setUpdate(false);
    }
  }, [update]);
  return (
    <Wrapper>
      <Banner background={`${info.image}`} />
      <ProductInformation />
      <DescriptionBox>{info.description}</DescriptionBox>
      <FiliterButtons />
      <ReviewsBox>
        <ul>
          {reviews &&
            reviews.map(review => {
              return <ReviewItem review={review} key={review.id} />;
            })}
        </ul>
      </ReviewsBox>
      <MyReviewForms />
    </Wrapper>
  );
}

export default Beer;
