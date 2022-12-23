import { Wrapper, MainBox, TitleBag, ContentBag, ButtonWrapper, CameraBag } from './style';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosMixCreate } from '../../util/axiosMix';
import { checkIfLogined } from '../../util/axiosLogin';

function MixCreateBox() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    try {
      checkIfLogined().then(() => {
        console.log(`✅ 로그인 성공`);
      });
    } catch (error) {
      console.log('로그인실패했다고 뜨는 메세지가 맞는지');
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
      await axiosMixCreate({ title, content }).then(id => {
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
              name="title"
              fullWidth
              label="제목을 입력해주세요 *"
              id="fullWidth"
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
              name="content"
              label="내용을 입력해주세요 *"
              variant="outlined"
              fullWidth
              multiline
              rows={20}
              defaultValue=""
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
              등록하기
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

export default MixCreateBox;
