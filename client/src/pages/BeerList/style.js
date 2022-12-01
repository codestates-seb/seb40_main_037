import styled from 'styled-components';
import { flexCenter, flexColumn, flexRowBetween } from '../../styles';

export const Wrapper = styled.section`
  width: 100%;
`;

export const BeerLiheader = styled.div`
  width: 100%;
  ${flexRowBetween}

  span {
    font-size: 35px;
    font-weight: bolder;
    padding: 30px;
  }

  button {
    margin-left: 5px;
    height: 10px;
    border: solid 1px;
  }
`;

export const Beercontainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Beertagbox = styled.ul`
  ${flexColumn}
  height: 100%;
  background-color: var(--lightgray);
  border-radius: 20px;
  padding: 20px;

  span {
    font-size: 0.8rem;
  }
`;

export const Tags = styled.ul`
  border-bottom: 1px solid;
  margin-bottom: 10px;

  button {
    width: 100%;
  }
`;

export const BeerItems = styled.ul`
  ${flexCenter}
  width: 100%;
  height: 100%;

  background-color: var(--bg);
  border-radius: 20px;
  padding: 30px;
`;
