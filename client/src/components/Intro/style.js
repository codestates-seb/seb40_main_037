import styled from 'styled-components';
import { blockCenter, flexCenter, flexColumnCenter } from '../../styles/index';

export const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background-color: var(--bg);
  ${blockCenter};
`;

export const AgeQuestion = styled.div`
  width: 100%;
  height: 30vh;
  color: red;
  font-size: 4vw;
  ${flexCenter};
  white-space: nowrap;
`;

export const AgeAnswer = styled.div`
  width: 100%;
  height: 30vh;
  ${flexCenter};

  gap: 10vw;
`;

export const CautionMent = styled.ul`
  width: 100%;
  height: 20vh;
  ${blockCenter};
  text-align: center;
  font-size: 1vw;
  color: var(--gray);

  li {
    margin-bottom: 5px;

    :first-child {
      color: red;
      font-size: 8vw;
      font-weight: bold;
      margin: 10px;
    }
  }
`;
