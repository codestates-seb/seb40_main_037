import styled from 'styled-components';

import { flexCenter, flexColumnCenter } from '../../styles/index';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 800px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('/assets/ErrorBackground.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${flexColumnCenter};
`;

export const FormWrap = styled.div`
  ${flexColumnCenter};
  padding: 24px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  button {
    margin-top: 10px;
    width: 100%;
  }
`;

export const Birth = styled.div`
  ${flexCenter}
  gap: 7px;
`;

export const Info = styled.ul`
  margin-top: 50px;
  font-size: 0.8rem;
  text-align: center;

  li {
    margin-bottom: 15px;
    a {
      font-weight: 700;
      color: var(--darkblue);
    }
  }
`;
