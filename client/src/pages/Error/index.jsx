import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ErrorMessage } from './style';
import Layout from '../../components/Layout';

const Error = () => {
  return (
    <Layout isHeader={false}>
      <Wrapper>
        <ErrorMessage className="title">Page not found</ErrorMessage>
        <ErrorMessage>
          Go to <Link to="/">main page</Link>
        </ErrorMessage>
        <ErrorMessage>
          Try <Link to="/login">Log in</Link> or <Link to="/join">Sign up</Link>
        </ErrorMessage>
        <ErrorMessage>
          Browse your <Link to="/mypage">My page</Link>
        </ErrorMessage>
      </Wrapper>
    </Layout>
  );
};

export default Error;
