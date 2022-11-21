import styled from 'styled-components';
import { blockCenter, flexCenter } from '../../styles/index';

export const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('src/assets/ErrorBackground.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${flexCenter};
  display: inline-block
  font-size: 1vw;

  .Errortitle {
    font-size: 15vw;
    
    font-weight: bolder;
  }
`;
