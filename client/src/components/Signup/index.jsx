import { Input } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';

import { Wrapper, FormWrap, Info } from './style';

const Signup = () => {
  return (
    <Wrapper>
      <FormWrap>
        <form>
          Name
          <input />
          Email
          <input />
          Password
          <input type="password" />
          <Button label="Log in">Login</Button>
        </form>
      </FormWrap>
      <Info>
        <li>
          Don't have an account? <Link to="/join">Sign up</Link>
        </li>
      </Info>
    </Wrapper>
  );
};

export default Signup;
