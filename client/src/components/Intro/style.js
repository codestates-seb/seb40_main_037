import styled from 'styled-components';
import { blockCenter, flexCenter, flexColumnCenter } from '../../styles/index';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 600px;
  height: 80vh;
  background-color: var(--bg);
  ${blockCenter};
`;

export const AgeQuestion = styled.div`
  width: 100%;
  height: 30%;
  color: red;
  font-size: 4vw;
  ${flexCenter};
  white-space: nowrap;
`;

export const AgeAnswer = styled.div`
  width: 100%;
  height: 30%;
  ${flexCenter};

  gap: 10vw;
`;

export const CautionMent = styled.ul`
  width: 100%;
  height: 30%;
  ${blockCenter};
  text-align: center;
  font-size: 1rem;
  color: var(--gray);

  li {
    margin-bottom: 5px;

    :first-child {
      color: red;
      font-size: 6rem;
      font-weight: bold;
      margin: 10px;
    }
  }
`;
