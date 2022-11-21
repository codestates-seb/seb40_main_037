import styled, { css } from 'styled-components';
import { flexCenter } from '../../styles/index';

export const Wrapper = styled.footer`
  height: 80px;
  background-color: var(--bg);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  ${flexCenter}

  position: absolute;

  display: none;
  @media ${props => props.theme.mobile} {
    ${flexCenter}
    position: sticky;
    bottom: 0px;
    z-index: 1;
  }

  li {
    padding: 5px;
    margin: 10px 0;
    cursor: pointer;
    :hover {
      background: #ddd;
      border-radius: 5px;
    }
    span {
      margin: 15px;
      display: block;
      font-size: 0.85rem;
    }
  }
`;
