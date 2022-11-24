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
