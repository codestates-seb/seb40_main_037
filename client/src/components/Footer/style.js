import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 32px 12px;
  background-color: var(--orange);
`;
export const Container = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: normal;
  @media ${props => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const InnerBox = styled.div`
  display: flex;
`;

export const ListWrap = styled.ul`
  flex: 1 0 auto;
  &.sns {
    display: flex;
    flex-direction: row;
    flex: 0;
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
  &:first-child {
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
