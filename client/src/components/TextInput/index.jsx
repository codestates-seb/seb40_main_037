import React from 'react';
import { Link } from 'react-router-dom';

import { InputWrap } from './style';

const TextInput = ({ id, type = 'text', label, isError, errorMsg, link = false, ...rest }) => {
  return (
    <InputWrap>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className={isError ? 'error' : ''} {...rest} />
      {isError && <p>{errorMsg}</p>}
    </InputWrap>
  );
};

export default TextInput;
