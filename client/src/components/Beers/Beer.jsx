import React, { useState } from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
<<<<<<< HEAD:client/src/components/Beers/Beer.jsx
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
=======
import subBanner from '/assets/subpage/subbanner1.png';
>>>>>>> 89ac068f7d29bd222878f977d016c1b6641c5525:client/src/components/Items/Item.jsx
//  MUI 라이브러리
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton';

// 기능 컴포넌트
import './beerStyle.css';
import ProductInformation from './ProductInformation';
import MyReviewForms from './MyReivewForms';
import FiliterButtons from './FilterButtons';
// 스타일 컴포넌트
import { CardTime } from '../MixFoodCardList/style';
import { relTimeFormat } from '../../util/convertor';

// BEERLIST
import { BeerListDetail } from './fetchBeer';

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

const LeftBox = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  display: flex;
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
  const [selected, setSelected] = React.useState(false);
  const [update, setUpdate] = useState(true);
  const [likes, setLikes] = useState(0);
  // const onIncrease = () => {
  //   setLikes(prevLikes => prevLikes + 1);
  // };
  // 불러오기
  const { id } = useParams();
  const [info, setInfo] = useState({});
  // 렌더링 될때

  const getBeerDetail = id => {
    BeerListDetail(id).then(res => {
      setInfo(res);
    });
  };

  useEffect(() => {
    if (update) {
      getBeerDetail(id);
      setUpdate(false);
    }
  }, [update]);
  // console.log(info);
  return (
    <Wrapper>
      <Banner background={`${info.image}`} />
      <ProductInformation />
      <DescriptionBox>{info.description}</DescriptionBox>
      <FiliterButtons />
      <ReviewsBox>
        <ul>
          {dummy.reviews.map(review => {
            return (
              <li className="reviewList" key={review.id}>
                <LeftBox>
                  <div className="profile">
                    <img src={review.avatar} />
                    <p className="userName">{review.name}</p>
                  </div>
                  <Rating className="rating-star" value={review.value} size="large" readOnly />
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
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                    e
                  >
                    <FavoriteIcon />
                    <h2>{review.good}</h2>
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

export default Beer;
