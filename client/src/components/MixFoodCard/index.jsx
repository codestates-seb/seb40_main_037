import {
  Wrapper,
  CardBox,
  CardIDImage,
  CardIDTitle,
  CardImage,
  CardTag,
  CardTitle,
  CardVote,
  CardBottom,
} from './style';
import dummyImg from '../../assets/dummyImg.png';

const MixFoodCard = () => {
  return (
    <Wrapper>
      <CardBox>
        <CardImage src={dummyImg} alt="임시 사진입니다." />
        <CardBottom>
          <CardIDImage src={dummyImg} alt="임시 사진입니다." />
          <CardIDTitle>CardIDTitle</CardIDTitle>
          <CardTag>임시테그</CardTag>
        </CardBottom>
        <CardBottom>
          <CardTitle>CardTilte</CardTitle>
          <CardVote>CardVote</CardVote>
        </CardBottom>
      </CardBox>
    </Wrapper>
  );
};

export default MixFoodCard;
