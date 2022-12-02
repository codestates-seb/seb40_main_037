import styled from 'styled-components';

export const InputWrap = styled.div`
  margin-bottom: 20px;
  position: relative;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 0.9rem;
    font-weight: 900;
  }
  input {
    text-align: center;
    width: 100%;
    border: 1px solid var(--lightgray);
    margin-bottom: 10px;
    border-radius: 10px;
    height: 35px;
    &.error {
      border: 1px solid rgba(222, 79, 84);
    }
  }
  p {
    position: relative;
    top: 5px;
    font-size: 0.8rem;
    color: rgba(222, 79, 84);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.8rem;
    color: var(--darkblue);
  }
`;
