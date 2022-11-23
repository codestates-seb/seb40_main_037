import React from 'react';
import { Button } from '../button';

import { Wrapper, Reqcontainer, InputList, InputImg } from './style';

const BeerReq = () => {
  return (
    <Wrapper>
      <Reqcontainer>
        <InputList>
          <div>
            이름 (필수 입력사항입니다.)
            <input />
          </div>
          <div>
            생산지
            <input />
          </div>
          <div>
            브랜드
            <input />
          </div>
          <div>
            맥주의 주종
            <input />
          </div>
        </InputList>
        <InputImg>
          <div>
            <img src="" />
          </div>
          <span>
            <input type="file"></input>
            <Button label="submit" />
          </span>
        </InputImg>
      </Reqcontainer>
      운영진의 검토 후, 주류를 추가하겠습니다.
      <Button label="Request" />
    </Wrapper>
  );
};

export default BeerReq;
