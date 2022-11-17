import React, { useState } from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import subBanner from '../../assets/subpage/subbanner1.png';

//  MUI 라이브러리
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// 기능 컴포넌트
import ProductInformation from './ProductInformation';
import UploadButtons from './UploadButton';
import '../../styles/muiStyle.css';
import StandaloneToggleButton from './GoodVoteButton';

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

const FilterButtonBox = styled.div`
  width: 70%;
  display: flex;
  margin: 10px auto;
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

const MyReivewForm = styled.form`
  width: 70%;
  flex-wrap: nowrap;
  margin: 20px auto;
  border: 1px solid blue;
  border-radius: 20px;
  .formBox {
    margin: 20px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  span {
    vertical-align: top;
  }
  .commentBox {
    background-color: gold;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    margin-top: 30px;
    border-radius: 20px;
  }
`;

function Item() {
  const [alignment, setAlignment] = React.useState('최신순');
  const [value, setValue] = useState(3);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Wrapper>
      <Banner />
      <ProductInformation />
      <FilterButtonBox>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
        >
          <ToggleButton value="최신순">최신순</ToggleButton>
          <ToggleButton value="인기순">인기순</ToggleButton>
        </ToggleButtonGroup>
      </FilterButtonBox>
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
                <StandaloneToggleButton />
                <ImageList
                  sx={{ width: 230, height: 230 }}
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
      <MyReivewForm>
        {dummy.users.map(user => {
          return (
            <div className="formBox" key={user.name}>
              <img src={user.avatar} />
              <Rating
                className="rating-star"
                value={value.toString()}
                defaultValue={3}
                precision={0.5}
                min={0.5}
                onChange={newValue => {
                  setValue(newValue);
                }}
              />
              <UploadButtons />
              <div className="commentBox">{user.comment}</div>
            </div>
          );
        })}
      </MyReivewForm>
    </Wrapper>
  );
}

export default Item;
