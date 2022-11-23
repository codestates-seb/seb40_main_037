import * as React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Wrapper = styled.div`
  width: 100%;
`;
const CameraBag = styled.div`
  padding: 20px;
  float: left;
`;
const CameraButton = () => {
  return (
    <Wrapper>
      <CameraBag>
        <IconButton color="warning" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </CameraBag>
    </Wrapper>
  );
};

export default CameraButton;
