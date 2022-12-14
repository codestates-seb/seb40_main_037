import {
  Wrapper,
  HeaderBar,
  Title,
  Time,
  MixDetailImg,
  MixContent,
  Vote,
  ReviewsBox,
  MixContentBox,
  UDbutton,
  VoteBox,
  TimeBox,
  ReviewBox,
} from './style';
import { relTimeFormat } from '../../util/convertor';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MixDetailReviewForms from '../MixComponent/MixDetailReviewForms';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import MixDetailDelete from '../Modal/MixDetailDelete';
import Loading from '../Loading/Loading';
import { axiosMixDetail } from '../../util/axiosMix';
import { axiosMixUpVote, axiosMixDownVote } from '../../util/axiosMixVote';
import { axiosReplyList } from '../../util/axiosReply';

function MixDetailComponents() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [answerList, setAnswerList] = useState([]);
  const [update, setUpdate] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [isClickMUpVote, setIsClickMUpVote] = useState(false);
  const [isClickMDownVote, setIsClickMDownVote] = useState(false);
  const token = sessionStorage.getItem('access_token');
  const currUser = sessionStorage.getItem('userEmail');

  const showModalDelete = () => {
    setIsModalOpen(true);
  };

  const hideModalDelete = flag => {
    setIsModalOpen(!flag);
  };
  const onClickEdit = id => {
    navigate(`/mixes/${id}`);
  };
  const onClickMixCreate = () => {
    navigate('/Mix/Create');
  };
  const getMixDetail = id => {
    axiosMixDetail(id).then(res => {
      setInfo(res);
    });
  };
  const getReply = id => {
    axiosReplyList(id).then(res => {
      setAnswerList(res);
    });
  };
  const needUpdate = flag => {
    setUpdate(flag);
  };

  const checkIfAuthor = info => {
    if (token && currUser) {
      const author = info.account.email;
      if (author !== currUser) return '';
      return (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Link to="/Mix/create">
            <Button
              variant="contained"
              component="label"
              color="primary"
              onClick={() => onClickEdit(info.id)}
            >
              ????????????
            </Button>
          </Link>
          <Link to="/MixList">
            <Button variant="outlined" component="label" color="primary" onClick={showModalDelete}>
              ????????????
            </Button>
          </Link>
        </Stack>
      );
    }
  };
  const onClickMUpVote = id => {
    if (!token) {
      alert('???????????? ????????? ???????????????');
      return;
    }
    setIsClickMUpVote(true);
    axiosMixUpVote(id).then(() => {
      setIsClickMUpVote(false);
    });
  };
  const onClickMDownVote = id => {
    if (!token) {
      alert('???????????? ????????? ???????????????');
      return;
    }
    setIsClickMDownVote(true);
    axiosMixUpVote(id).then(() => {
      setIsClickMDownVote(false);
    });
  };

  useEffect(() => {
    if (update) {
      getMixDetail(id);
      getReply(id);
      setUpdate(false);
      setIsPending(false);
    }
  }, [update]);

  if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Wrapper>
      {!isPending && Object.keys(info).length ? (
        <div>
          <HeaderBar>
            <Title>{info.data.title}</Title>
            <UDbutton>{info && checkIfAuthor(info)}</UDbutton>
          </HeaderBar>
          <TimeBox>
            {' '}
            {info.data.modifiedAt !== null ? (
              <Time>{relTimeFormat(info.data.modifiedAt)} ?????????</Time>
            ) : (
              <Time>{relTimeFormat(info.data.createdAt)} ????????? </Time>
            )}
          </TimeBox>

          <MixContentBox>
            <MixDetailImg src={info.data.image} alt="?????????????????????." />
            <MixContent>{info.data.content}</MixContent>
          </MixContentBox>

          <VoteBox>
            <Vote>
              <Button variant="contained" component="label" color="primary">
                ?????????
                <input hidden />
              </Button>
              <Vote>{info.data.likeCount}</Vote>
              <Button variant="outlined" component="label" color="primary">
                ?????????
                <input hidden />
              </Button>
              <Vote>{info.data.disLikeCount}</Vote>
            </Vote>
          </VoteBox>
        </div>
      ) : (
        ''
      )}
      <ReviewsBox>
        <ReviewBox>??????</ReviewBox>
        <ul>
          {answerList.data &&
            answerList.data.map(data => {
              return (
                <li className="reviewList" key={answerList.data.id}>
                  <div className="profile">
                    {/* <img src={answerList.avatar} /> */}
                    <p className="userName">{answerList.data.nickName}</p>
                  </div>
                  <p>{answerList.data.createdAt}</p>
                  <ImageList
                    sx={{ width: 500, height: 500 }}
                    cols={5}
                    rowHeight={'auto'}
                    gap={10}
                    className="imageItemBox"
                  >
                    {answerList.data.img &&
                      answerList.data.img.map(item => (
                        <ImageListItem key={answerList.data.img}>
                          <img
                            src={`${answerList.data.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${answerList.data.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={answerList.data.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                  </ImageList>
                  <div className="commentBox">{answerList.data.comment}</div>
                </li>
              );
            })}
        </ul>
      </ReviewsBox>
      <MixDetailReviewForms />
    </Wrapper>
  );
}
export default MixDetailComponents;
