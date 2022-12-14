import styled from 'styled-components';
import { container } from '../../styles';

export const Wrapper = styled.footer`
  padding: 32px 12px;
  background-image: url('/assets/Footer.png');
  background-repeat: no-repeat;
  background-size: cover;
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
  }
  &.sitemap {
    flex: 2 1 auto;
    @media ${props => props.theme.mobile} {
      flex-direction: column;
    }
  }
  &.sns {
    justify-content: space-between;
    flex-direction: column;
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
        color: var(--gray);
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
    color: var(--gray);
    font-size: 0.85rem;
    font-weight: 700;
    @media ${props => props.theme.mobile} {
      display: block;
      margin: 5px 0 0 0;
    }
  }

  a {
    color: var(--gray);
  }
  line-height: 18px;
  font-size: 0.8rem;
  @media ${props => props.theme.mobile} {
    display: inline-block;
    margin-right: 10px;
  }
`;
