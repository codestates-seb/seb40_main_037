import styled from 'styled-components';
import { flexColumnCenter } from '../../styles/index';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('src/assets/ErrorBackground.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${flexColumnCenter};
`;

export const ErrorMessage = styled.div`
  margin-bottom: 15px;

  &.title {
    font-size: 2rem;
    margin-bottom: 15px;
    font-weight: bolder;
    @media ${props => props.theme.mobile} {
      font-size: 2rem;
    }
  }

  a {
    color: hsl(206deg 100% 40%);
    &:hover {
      color: hsl(206deg 100% 52%);
    }
  }
`;
