import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../styles';

export const Wrapper = styled.section`
  width: 100%;
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

  background-color: var(--lightgray);
  border-radius: 20px;
  padding: 30px;
`;
