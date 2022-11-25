import styled from 'styled-components';
import { container } from '../../styles';

export const Wrapper = styled.footer`
  padding: 32px 12px;
  background-color: var(--footer-background-color);
`;
export const Container = styled.div`
  ${container}
  justify-content: normal;
  @media ${props => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  .logo span {
    display: block;
    width: 28px;
    height: 30px;
    background-size: auto;
    background-position-y: bottom;
    font-size: 0;
    text-indent: -9999px;
  }
  &.logo {
    flex: 0 0 64px;
    @media ${props => props.theme.mobile} {
      display: none;
    }
  }
  &.sitemap {
    flex: 2 1 auto;
    @media ${props => props.theme.mobile} {
      flex-direction: column;
    }
  }
  &.sns {
    justify-content: space-between;
    flex: 1 1;
    @media ${props => props.theme.mobile} {
      flex: 1 1;
    }
  }
`;

export const ListWrap = styled.ul`
  flex: 1 0 auto;
  &.sns {
    display: flex;
    flex-direction: row;
    flex: 0;
    a {
      margin-right: 10px;
    }
    li {
      margin-right: 10px;
      line-height: 14px;
      &:first-child {
        font-size: 0.8rem;
        color: hsl(210, 8%, 60%);
        font-weight: 400;
        @media ${props => props.theme.mobile} {
          margin: 0px;
        }
      }
    }
    &:last-child li {
      font-size: 0.6rem;
    }
    @media ${props => props.theme.mobile} {
      margin-top: 10px;
    }
  }
`;

export const List = styled.li`
  .title {
    margin-bottom: 3px;
    color: hsl(210, 8%, 75%);
    font-size: 0.85rem;
    font-weight: 700;
    @media ${props => props.theme.mobile} {
      display: block;
      margin: 5px 0 0 0;
    }
  }
  line-height: 18px;
  font-size: 0.8rem;
  color: hsl(210, 8%, 60%);
  @media ${props => props.theme.mobile} {
    display: inline-block;
    margin-right: 10px;
  }
`;
