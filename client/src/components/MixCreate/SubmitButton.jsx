import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  padding: 20px;
`;

export default function SubmitButton() {
  return (
    <Wrapper>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label" color="primary">
          등록하기
          <input hidden />
          {/* Post 버튼으로 수정 */}
        </Button>
        <Link to="/MixList">
          <Button variant="outlined" component="label" color="primary">
            목록으로
            <input hidden />
            {/* Post 버튼으로 수정 */}
          </Button>
        </Link>
      </Stack>
    </Wrapper>
  );
}
