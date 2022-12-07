import * as React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
// 사용 하지 않고있습니다
const SubmitForm = styled.div`
  background-color: tomato;
`;

const PrviewImageBox = styled.div`
  border: 1px solid gold;
  display: flex;
  width: 100%;
  flex-direction: wrap;
`;

export default function UploadButtons() {
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
    <SubmitForm>
      <Stack direction="row" alignItems="center" spacing={2} className="uploadButtons">
        <Button variant="contained" component="label" color="warning">
          Upload
          <input hidden />
          {/* Post 버튼으로 수정 */}
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
              </div>
            );
          })}
      </PrviewImageBox>
    </SubmitForm>
  );
}
