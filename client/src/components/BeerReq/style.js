import styled from 'styled-components';
import { flexColumnCenter, flexCenter, flexColumn } from '../../styles/index';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  gap: 50px;
  margin: 50px 0px;
  ${flexColumnCenter};
`;

export const Reqcontainer = styled.div`
  width: 100%;
  height: 50vh;
  ${flexCenter};
`;

export const InputList = styled.div`
  gap: 20px;
  ${flexColumn};
  margin-right: 30px;

  div {
    ${flexColumn};
  }

  input {
    height: 40px;
    border-radius: 10px;
  }

  @media ${props => props.theme.mobile} {
    max-width: 40%;
    margin-right: 15px;
  }
`;

export const InputImg = styled.div`
  ${flexColumn};
  height: 300px;
  div {
    background-color: var(--gray);
    height: 100%;
  }

  span {
    ${flexCenter};
  }

  @media ${props => props.theme.mobile} {
    max-width: 50%;
  }
`;
