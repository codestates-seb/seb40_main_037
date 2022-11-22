import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ErrorMessage } from './style';

const Errorpage = () => {
  return (
    <Wrapper>
      <ErrorMessage className="title">Page not found</ErrorMessage>
      <ErrorMessage>
        Try <Link to="/">main page</Link>
      </ErrorMessage>
      <ErrorMessage>
        Try <Link to="/login">Login</Link> or <Link to="/join">Sign up</Link>
      </ErrorMessage>
      <ErrorMessage>
        Browse your <Link to="/mypage">My page</Link>
      </ErrorMessage>
    </Wrapper>
  );
};

export default Errorpage;
