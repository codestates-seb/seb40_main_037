import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const TitleBag = styled.div`
  padding: 20px;
`;

const TitleBox = () => {
  return (
    <Wrapper>
      <TitleBag>
        <Box
          sx={{
            width: 500,
          }}
        >
          <TextField fullWidth label="제목을 입력해주세요 *" id="fullWidth" />
        </Box>
      </TitleBag>
    </Wrapper>
  );
};

export default TitleBox;
