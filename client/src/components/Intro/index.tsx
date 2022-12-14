import { Button } from '../Buttons';
import { Wrapper, AgeQuestion, AgeAnswer, CautionMent } from './style';
import { CautionMents } from '../../constants/intro';
import { Link } from 'react-router-dom';

const Introitem = () => {
  const { Notion, WarningMents } = CautionMents;
  return (
    <Wrapper>
      <AgeQuestion>{Notion.Notice}</AgeQuestion>
      <AgeAnswer>
        <Link to="/">
          <Button
            primary="Mypagebutton"
            label="19세 이상입니다."
            onClick={() => localStorage.setItem('isadult', 'true')}
            Selected=""
            color=""
            Choosed=""
            link=""
          />
        </Link>
        <Button
          primary="Mypagebutton"
          label="19세 미만입니다."
          onClick={() => alert('19세 이상이 되시면 이용해주세요!')}
          Selected=""
          color=""
          Choosed=""
          link=""
        />
      </AgeAnswer>
      <CautionMent>
        {WarningMents.map((items: any, i: number) => {
          return <li key={i}>{items.Ments}</li>;
        })}
      </CautionMent>
    </Wrapper>
  );
};

export default Introitem;
