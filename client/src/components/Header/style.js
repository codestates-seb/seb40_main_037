import styled from 'styled-components';
import { flexCenter, flexRowBetween, container } from '../../styles/index';

export const Wrapper = styled.header`
  z-index: 1;
  height: 60px;
  background-color: var(--bg);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  ${flexCenter}
  position: sticky;
  top: 0;
  justify-content: space-between;
`;

export const Headerbox = styled.div`
  ${container};
  padding: 0px 50px;
  justify-content: space-between;

  .menu {
    ${flexRowBetween}
    padding: 0 6px;
    margin-right: 15px;
    display: none;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }
  .logo {
    ${flexCenter}
  }
  .logo span {
    display: block;
    width: 150px;
    height: 30px;
    background-image: url(/sprites.svg);
    background-size: cover;
    background-position-y: -7px;
    font-size: 0;
    text-indent: -9999px;
  }
  .profile {
    ${flexCenter}
    span {
      margin: 3px 0 0 5px;
      font-size: 0.8rem;
      font-weight: 900;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const UserBox = styled.div`
  position: relative;
  margin-left: 10px;
  flex: 1 1 auto;
  left: 0px;
  z-index: 1;
  ${flexCenter}

  button {
    display: flex;
    padding: 5px;
    justify-content: center;
    height: 50px;
    font-size: 13px;
    align-items: center;
    position: relative;
    cursor: pointer;
    border-radius: 1000px;
    border: 1px solid hsla(0, 0%, 0%, 0.25);
    white-space: nowrap;
    background-color: white;
    @media ${props => props.theme.mobile} {
      display: none;
    }

    &:hover {
      box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.35), 0 2px 8px hsla(0, 0%, 0%, 0.05),
        0 2px 8px hsla(0, 0%, 0%, 0.05);
    }

    .UserImg {
      border-radius: 10000px;
      height: 40px;
      border: 1px solid hsla(0, 0%, 0%, 0.35);
    }

    .HamImg {
      height: 20px;
      margin: 8px;
      margin-right: 5px;
    }
  }

  input {
    width: 100%;
    min-width: 300px;
    height: 33px;
    border: 1px solid var(--lightgray);
    border-radius: 5px;
    padding-left: 33px;
  }
`;

export const UserDropBox = styled.ul`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  min-width: 100px;
  border: 1px solid #ddd;
  box-shadow: hsla(0, 0%, 0%, 0.1);
  background: #fff;
  border-radius: 15px;
  padding: 10px 5px;
  margin-left: -50px;
  min-width: 160px;

  ::after {
    top: -8px;
    border-bottom: 10px solid #fff;
  }
  ::before {
    top: -9px;
  }
  li {
    padding: 5px;
    margin: 10px 0;
    cursor: pointer;
    :first-child {
      margin-top: 0;
    }
    :hover {
      background: #ddd;
      border-radius: 5px;
    }
    span {
      margin-left: 15px;
      display: block;
      font-size: 0.85rem;
      &:last-child {
        font-size: 0.75rem;
        color: var(--gray);
      }
    }
  }
`;
