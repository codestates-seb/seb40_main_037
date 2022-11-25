import * as React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import dummy from '../../../data/data.json';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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

  const [reviews, setReviews] = useState({
    name: '',
    comment: '',
    avatar: '',
    value: '',
    creadtedAt: 'test',
    photo: [],
  });

  const onChangeAccount = e => {
    setReviews({
      ...reviews,
      [e.target.name]: e.target.value,
    });
  };

  async function getSignup() {
    try {
      await axios
        .post('http://localhost:8000/reviews/', {
          name: reviews.name,
          avatar: reviews.avatar,
          value: reviews.value,
          comment: reviews.comment,
          creadtedAt: reviews.creadtedAt,
          good: 0,
        })
        .then(data => {
          dispatch(postingActions.register());
          localStorage.clear();
          localStorage.setItem('accessToken', data.headers.authorization);
          // navigate('/questions');
          alert('회원가입 성공');
          // console.log(data.headers.authorization);
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
  console.log('회원 가입 여부', isLogin);
  return (
    <MyReivewForm>
      {dummy.users.map(user => {
        return (
          <div className="formBox" key={user.name}>
            <div className="itemMyProfile">
              <img src={user.avatar} />
              <Rating
                className="rating-star"
                value={Number(value)}
                defaultValue={3}
                precision={1}
                min={1}
                onChange={
                  (event,
                  newValue => {
                    setValue(newValue);
                    console.log(event);
                  })
                }
              />
            </div>
            {/* 업로드 버튼 코드 시작*/}
            <Stack direction="row" alignItems="center" spacing={2} className="uploadButtons">
              {/* {selectedImages.length <= 5 ? 업로드 : 이상이면 업로드 불가} 작성할코드 */}
              <Button variant="contained" component="label" color="warning">
                Upload
                <input hidden />
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
            <input className="commentBox"></input>
          </div>
        );
      })}
    </MyReivewForm>
  );
}
