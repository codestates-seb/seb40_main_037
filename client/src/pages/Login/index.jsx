import React, { useState, useEffect, useCallback } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { EMAIL_REGEX, PW_REGEX } from '../../constants/regex';
import { userLogin } from '../../api/Account';
import Layout from '../../components/Layout';

import { Button } from '../../components/button';

import { Wrapper, FormWrap, Info } from './style';
import TextInput from '../../components/TextInput';

const Login = () => {
  const auth = localStorage.getItem('isLogin');
  if (auth) return <Navigate to="/" />;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const { mutate, data } = useMutation(userLogin, {
    onSuccess: () => {
      setIsLogin(true);
    },
    onError: error => {
      alert(error.message);
    },
  });

  useEffect(() => {
    if (isLogin) {
      localStorage.setItem('isLogin', true);
      localStorage.setItem('access_token', JSON.stringify(data.headers.authorization));
      localStorage.setItem('Refresh', JSON.stringify(data.headers.refresh));
      localStorage.setItem('memberId', JSON.stringify(data.data));
      navigate('/');
    }
  }, [isLogin]);

  const handleChangeEmail = useCallback(
    e => {
      if (EMAIL_REGEX.test(e.target.value)) {
        setEmailError(false);
      }
      setEmail(e.target.value);
    },
    [email],
  );

  const handleChangePw = useCallback(
    e => {
      if (PW_REGEX.test(e.target.value)) {
        setPwError(false);
      }
      setPw(e.target.value);
    },
    [pw],
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email) || !PW_REGEX.test(pw)) {
      if (!EMAIL_REGEX.test(email)) setEmailError(true);
      if (!PW_REGEX.test(pw)) setPwError(true);
      return;
    }
    mutate({
      username: email,
      password: pw,
    });
  };

  return (
    <Layout>
      <Wrapper>
        <FormWrap>
          <form>
            ID
            <TextInput
              id="email"
              placeholder="Email"
              errorMsg="이메일 형식을 맞춰주세요."
              isError={emailError}
              value={email}
              onChange={handleChangeEmail}
            />
            Password
            <TextInput
              id="pw"
              type="password"
              placeholder="Password"
              errorMsg="8자 이상, 문자, 숫자, 특수문자가 하나씩 들어가야 합니다."
              isError={pwError}
              value={pw}
              onChange={handleChangePw}
            />
          </form>
          <Button label="Log in" onClick={handleSubmit}>
            Login
          </Button>
        </FormWrap>
        <Info>
          <li>
            Don't have an account? <Link to="/join">Sign up</Link>
          </li>
        </Info>
      </Wrapper>
    </Layout>
  );
};

export default Login;
