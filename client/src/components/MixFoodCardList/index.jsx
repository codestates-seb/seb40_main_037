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
  CardImageBox,
  CardTime,
} from './style';

import Mixdummydata from '../../../data/Mixdummydata.json';
import { relTimeFormat } from '../../util/convertor';
console.log(Mixdummydata.card.title);

const MixFoodCardList = () => {
  return (
    <Wrapper>
      <ul>
        {Mixdummydata.card &&
          Mixdummydata.card.map(card => {
            return (
              <li className="cardList" key={card.id}>
                <CardBox>
                  <CardImageBox>
                    <CardImage src={card.cardImg} alt="임시 사진입니다." />
                  </CardImageBox>
                  <CardBottom>
                    <CardIDImage src={card.avatar} alt="임시 사진입니다." />
                    <CardIDTitle>{card.nickname}</CardIDTitle>
                    <CardTag>null</CardTag>
                  </CardBottom>
                  <CardBottom>
                    <CardTitle>
                      {' '}
                      {card.title && card.title.replace(/"/g, '').replace(/<[^>]*>?/g, '')}
                    </CardTitle>
                    <CardVote>추천 {card.votes}</CardVote>
                    <CardTime>
                      {card.modified !== null ? (
                        <h1>{relTimeFormat(card.modified)} 수정됨</h1>
                      ) : (
                        <h1>{relTimeFormat(card.createdAt)} 생성됨 </h1>
                      )}
                    </CardTime>
                  </CardBottom>
                </CardBox>
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
};

export default MixFoodCardList;
