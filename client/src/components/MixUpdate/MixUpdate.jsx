import styled from 'styled-components';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMixCreate, fetchMixDetail, MixUpdate } from '../../util/fetchMix';
// import {체크로그인 자리} from '페치로그인'

const Wrapper = styled.div`
  width: 100%;
`;
const MainBox = styled.div`
  margin-right: auto;
  margin-left: auto;
`;
const TitleBag = styled.div`
  padding: 20px;
`;
const ContentBag = styled.div`
  padding: 20px;
`;
const CameraBag = styled.div`
  padding: 20px;
  float: left;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: inline-block;
  padding: 20px;
`;

function MixUpdateBox() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    try {
      // 체크로그인자리 : 로그인이 성공한다면
      checkIfLogined().then(() => {
        fetchMixDetail(id).then(res => {
          setTitle(res.title);
          setContent(res.content);
          console.log('로그인 성공');
        });
      });
    } catch (error) {
      console.log('에러');
    }
  }, []);

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeContent = content => {
    setContent(content);
  };

  const onClickSubmit = async () => {
    if (title.length < 9) {
      alert('최소 10글자 이상써주세요');
    } else if (content.length < 20) {
      alert('최소 20글자 이상 써주세요');
    } else {
      await fetchMixCreate({ title, content }).then(id => {
        navigate(`/MixDetail/${id}`);
      });
    }
  };

  return (
    <Wrapper>
      <MainBox>
        <TitleBag>
          <Box
            sx={{
              width: 500,
            }}
          >
            <TextField
              fullWidth
              label="제목을 입력해주세요 *"
              id="fullWidth"
              value={title}
              onChange={onChangeTitle}
            />
          </Box>
        </TitleBag>
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
              defaultValue={content}
              id="fullWidth"
              onChange={onChangeContent}
            ></TextField>
          </Box>
        </ContentBag>
        <CameraBag>
          <IconButton color="warning" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </CameraBag>
        <ButtonWrapper>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label" color="primary" onClick={onClickSubmit}>
              저장하기
              <input hidden />
            </Button>
            <Link to="/MixList">
              <Button variant="outlined" component="label" color="primary">
                목록으로
                <input hidden />
              </Button>
            </Link>
          </Stack>
        </ButtonWrapper>
      </MainBox>
    </Wrapper>
  );
}

export default MixUpdateBox;
