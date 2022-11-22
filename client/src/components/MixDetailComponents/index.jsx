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
} from './style';
import MixdummydataDetail from '../../../data/MixdummydataDetail.json';
import { relTimeFormat } from '../../util/convertor';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MixDetailReviewForms from './MixDetailReviewForms';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// const showModalDelete = () => {
//   setIsModalOpen(true);
// };

// const onClickEdit = id => {
//   navigate(`/question/update/${id}`);
// };

// const checkIfAuthor = info => {
//   if (token && currUser) {
//     const author = info.account.email;
//     if (author !== currUser) return '';
//     return (
//       <div>
//         <button onClick={() => onClickEdit(info.id)} className="mr-2">
//           Edit
//         </button>
//         |
//         <button onClick={showModalDelete} className="ml-2">
//           Delete
//         </button>
//       </div>
//     );
//   }
// };
const par = MixdummydataDetail.card[0];
console.log(MixdummydataDetail.reviews);
console.log(par.title);
const onClickUpVote = (
  <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="error">This is an error alert — check it out!</Alert>
  </Stack>
);
console.log(onClickUpVote);
const MixDetailComponents = () => {
  return (
    <Wrapper>
      <HeaderBar>
        <Title>{par.title}</Title>
        <UDbutton>Edit</UDbutton>
        <UDbutton>Delete</UDbutton>
      </HeaderBar>
      <TimeBox>
        {' '}
        {par.modified !== null ? (
          <Time>{relTimeFormat(par.modified)} 수정됨</Time>
        ) : (
          <Time>{relTimeFormat(par.createdAt)} 생성됨 </Time>
        )}
      </TimeBox>
      {/* {info && checkIfAuthor(info)} */}
      <MixContentBox>
        <MixDetailImg src={par.cardImg} alt="임시사진입니다." />
        <MixContent>{par.content}</MixContent>
      </MixContentBox>
      <VoteBox>
        <UDbutton onClick={() => onClickUpVote}>DOWN</UDbutton>
        <UDbutton>UP</UDbutton>
        <Vote>추천수 {par.votes}</Vote>
      </VoteBox>
      <ReviewsBox>
        <Vote>후기</Vote>
        <ul>
          {MixdummydataDetail.reviews.map(review => {
            return (
              <li className="reviewList" key={review.id}>
                <div className="profile">
                  <img src={review.avatar} />
                  <p className="userName">{review.name}</p>
                </div>
                <p>{review.createdAt}</p>
                <ImageList
                  sx={{ width: 500, height: 500 }}
                  cols={5}
                  rowHeight={'auto'}
                  gap={10}
                  className="imageItemBox"
                >
                  {review.photo &&
                    review.photo.map(item => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
                <div className="commentBox">{review.comment}</div>
              </li>
            );
          })}
        </ul>
      </ReviewsBox>
      <MixDetailReviewForms />
    </Wrapper>
  );
};
export default MixDetailComponents;
