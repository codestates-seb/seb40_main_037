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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { uploadActions } from '../../store/redux/upload';
// 서버 와 연결
import { BeerRivewCreate } from './fetchBeer';

const MyReivewForm = styled.form`
  width: 70%;
  margin: 20px auto;
  padding: 10px 0;
  background-color: #fff1db;
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
    border: none;
    background-color: #ffbd9b;
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
  // 리뷰 작성 상태관리
  const [score, setScore] = React.useState(0);
  const [content, setContent] = useState('');
  // const [title, setTitle] = useState('');

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

  useEffect(() => {
    try {
      // 체크로그인자리 : 로그인이 성공한다면
      checkIfLogined().then(() => {
        console.log('로그인 성공');
      });
    } catch (error) {
      console.log('에러');
    }
  }, []);

  // const onChangeTitle = e => {
  //   setTitle(e.target.value);
  // };

  const onChangeContent = e => {
    setContent(e.target.value);
  };

  const onChangeScore = score => {
    setScore(score);
  };

  const onClickSubmit = async () => {
    await BeerRivewCreate({ score, content }).then(id => {
      console.log('hi');
    });
  };

  return (
    <MyReivewForm>
      {dummy.users.map(user => {
        return (
          <div className="formBox" key={user.id} name="name">
            <div className="itemMyProfile">
              <img src={user.image} value={user.image} name="image" />
              <Rating
                name="value"
                className="rating-star"
                value={Number(score)}
                precision={1}
                min={1}
                onChange={(event, newValue) => {
                  setScore(newValue);
                  console.log(newValue);
                }}
                onClick={onChangeScore}
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
                onClick={onClickSubmit}
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
            <input className="commentBox" name="comment" onChange={onChangeContent}></input>
          </div>
        );
      })}
    </MyReivewForm>
  );
}
