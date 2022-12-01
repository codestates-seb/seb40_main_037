import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Wrapper, FormWrap, Birth, Info } from './style';

import { EMAIL_REGEX, PW_REGEX, BIRTH_YEAR, BIRTH_MD } from '../../constants/regex';
import { userJoin } from '../../api/Account';
import { Button } from '../../components/button';
import Layout from '../../components/Layout';

const Signup = () => {
  const auth = localStorage.getItem('isLogin');
  if (auth) return <Navigate to="/" />;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const { mutate } = useMutation(userJoin, {
    retry: 0,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/members/login');
    },
  });

  const handleSignUp = e => {
    e.preventDefault();

    if (name === '' || !EMAIL_REGEX.test(email) || !PW_REGEX.test(pw)) {
      if (name === '') setNameError(true);
      if (!EMAIL_REGEX.test(email)) setEmailError(true);
      if (!PW_REGEX.test(pw)) setPwError(true);
      return;
    }
    mutate({
      name: name,
      email: email,
      password: pw,
    });
  };

  const handleChangeSign = useCallback(
    e => {
      const id = e.target.id;
      if (id === 'name') {
        setNameError(false);
        setName(e.target.value);
      }
      if (id === 'email') {
        setEmailError(false);
        setEmail(e.target.value);
      }
      if (id === 'pw') {
        setPwError(false);
        setPw(e.target.value);
      }
    },
    [name, email, pw],
  );

  return (
    <Layout>
      <Wrapper>
        <FormWrap>
          <form>
            Name
            <TextInput
              id="name"
              label="Display name"
              errorMsg="이름을 입력해 주세요."
              isError={nameError}
              value={name}
              onChange={handleChangeSign}
              placeholder="NickName"
            />
            Email
            <TextInput
              id="email"
              label="Email"
              errorMsg="이메일 형식을 맞춰주세요."
              isError={emailError}
              value={email}
              onChange={handleChangeSign}
              placeholder="Mail-address"
            />
            Password
            <TextInput
              id="pw"
              type="password"
              label="Password"
              errorMsg="최소 8 자, 최소 하나의 문자,하나의 숫자 및 하나의 특수 문자"
              isError={pwError}
              value={pw}
              onChange={handleChangeSign}
              placeholder="Password"
            />
            Password check
            <input type="password" placeholder="Password Again" />
            Birth
            <Birth>
              <input placeholder="year" /> <input placeholder="month" /> <input placeholder="day" />
            </Birth>
            <Button label="Join">Join</Button>
          </form>
        </FormWrap>
        <Info>
          <li>
            Have an account? <Link to="/login">Log in</Link>
          </li>
        </Info>
      </Wrapper>
    </Layout>
  );
};

export default Signup;
