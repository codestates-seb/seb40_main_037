import styled, { css } from 'styled-components';
import { container } from '../../styles';
import { flexCenter } from '../../styles/index';

export const Wrapper = styled.header`
  height: 50px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  ${flexCenter}
`;

export const ProductsBox = styled.div`
  position: relative;
  margin-left: 10px;
  z-index: 1;
  ${flexCenter}
  button {
    min-width: 80px;
    background: transparent;
    border: 0px solid transparent;
    height: 33px;
    font-size: 0.85rem;
    line-height: normal;
    border-radius: 50px;
    &.active {
      background-color: var(--orange);
    }
    @media ${props => props.theme.mobile} {
      min-width: 60px;
      height: 28px;
      font-size: 0.75rem;
    }
    :hover {
      background: #eee;
      color: #000;
    }
    &.active {
      background-color: var(--orange);
      color: #fff;
    }
  }
`;
``;
