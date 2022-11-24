import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
`;
const ContentBag = styled.div`
  padding: 20px;
`;
const ContentBox = () => {
  return (
    <Wrapper>
      <ContentBag>
        <Box
          sx={{
            width: 1000,
            maxWidth: '100%',
          }}
        >
          <TextField
            label="내용을 입력해주세요 *"
            variant="outlined"
            fullWidth
            multiline
            rows={20}
            defaultValue=""
            id="fullWidth"
          ></TextField>
        </Box>
      </ContentBag>
    </Wrapper>
  );
};

export default ContentBox;
