import * as React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import dummy from '../../../data/data.json';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { uploadActions } from '../../store/redux/upload';

const MyReivewForm = styled.form`
  width: 70%;
  margin: 20px auto;
  border: 1px solid blue;
  border-radius: 20px;
  .formBox {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .itemMyProfile {
    display: flex;
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
    border-radius: 20px;
  }
`;

const PrviewImageBox = styled.div`
  margin: 20px 0;
  display: flex;
  width: 100%;
`;

export default function MyReviewForms() {
  const [value, setValue] = React.useState(0);
  // 프리뷰 이미지
  const [selectedImages, setSelectedImages] = React.useState([]);
  const onSelectFile = event => {
    const seletedFiles = event.target.files;
    const seletedFilesArray = Array.from(seletedFiles);

    const imagesArray = seletedFilesArray.map(file => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);
    console.log(imagesArray);
  };

  // 리뷰 작성 상태관리
  const dispatch = useDispatch();
  const isUpload = useSelector(state => state.isUpload);

  const [reviews, setReviews] = useState({
    id: '',
    avatar: '',
    rating: '',
    comment: '',
    good: 0,
    name: '',
    createdAt: '',
  });

  const onChangeReview = e => {
    setReviews({
      ...reviews,
      [e.target.name]: e.target.value,
    });
  };

  async function getUpload() {
    try {
      await axios
        .post('http://localhost:3001/reviews', {
          avatar: reviews.avatar,
          rating: reviews.rating,
          comment: reviews.comment,
          good: reviews.good,
          name: reviews.name,
          createdAt: reviews.createdAt,
        })
        .then(data => {
          dispatch(uploadActions.upload());
          alert('등록 성공');
        });
      // 일치하는 유저가 존재 X
    } catch (error) {
      if (error.response.status === 401) {
        alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
        console.log(error);
      } else {
        alert(error.response.status);
        console.log(error);
      }
    }
  }
  console.log('작동 여부', isUpload);
  return (
    <MyReivewForm>
      {dummy.users.map(user => {
        return (
          <div className="formBox" key={user.name} name="name">
            <div className="itemMyProfile">
              <img src={user.avatar} value={reviews.avatar} name="avatar" />
              <Rating
                name="newValue"
                className="rating-star"
                value={Number(value)}
                precision={1}
                min={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            {/* 업로드 버튼 코드 시작*/}
            <Stack direction="row" alignItems="center" spacing={2} className="uploadButtons">
              {/* {selectedImages.length <= 5 ? 업로드 : 이상이면 업로드 불가} 작성할코드 */}
              <Button
                variant="contained"
                component="label"
                color="warning"
                type="submit"
                onClick={getUpload}
              >
                Upload
                {/* <input hidden /> */}
              </Button>
              <IconButton color="warning" aria-label="upload picture" component="label">
                <input hidden multiple onChange={onSelectFile} accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Stack>
            <PrviewImageBox>
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="prviewImage">
                      <img src={image} />
                      {/* <button
                        onClick={() => setSelectedImages(selectedImages.filter(e => e !== image))}
                      >
                        삭제
                      </button> */}
                    </div>
                  );
                })}
            </PrviewImageBox>
            <input
              className="commentBox"
              value={reviews.comment}
              name="comment"
              onChange={onChangeReview}
            ></input>
          </div>
        );
      })}
    </MyReivewForm>
  );
}
