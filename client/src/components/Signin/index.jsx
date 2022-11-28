import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../button';

import { Wrapper, FormWrap, Info } from './style';

const Signin = () => {
  // const auth = localStorage.getItem('isLogin');
  // if (auth) return <Navigate to="/" />;

  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [pw, setPw] = useState('');

  // const [nameError, setNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [pwError, setPwError] = useState(false);

  // const { mutate } = useMutation(userJoin, {
  //   retry: 0,
  //   onSuccess: () => {
  //     alert('회원가입이 완료되었습니다.');
  //     navigate('/members/login');
  //   },
  // });

  // const handleSignUp = e => {
  //   e.preventDefault();

  //   if (name === '' || !EMAIL_REGEX.test(email) || !PW_REGEX.test(pw)) {
  //     if (name === '') setNameError(true);
  //     if (!EMAIL_REGEX.test(email)) setEmailError(true);
  //     if (!PW_REGEX.test(pw)) setPwError(true);
  //     return;
  //   }
  //   mutate({
  //     name: name,
  //     email: email,
  //     password: pw,
  //   });
  // };

  // const handleChangeSign = useCallback(
  //   e => {
  //     const id = e.target.id;
  //     if (id === 'name') {
  //       setNameError(false);
  //       setName(e.target.value);
  //     }
  //     if (id === 'email') {
  //       setEmailError(false);
  //       setEmail(e.target.value);
  //     }
  //     if (id === 'pw') {
  //       setPwError(false);
  //       setPw(e.target.value);
  //     }
  //   },
  //   [name, email, pw],
  // );

  return (
    <Wrapper>
      <FormWrap>
        <form>
          ID
          <input placeholder="Email" />
          Password
          <input type="password" placeholder="Password" />
        </form>
        <Button label="Log in">Login</Button>
      </FormWrap>
      <Info>
        <li>
          Don't have an account? <Link to="/join">Sign up</Link>
        </li>
      </Info>
    </Wrapper>
  );
};

export default Signin;
