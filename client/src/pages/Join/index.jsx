import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Wrapper, FormWrap, Birth, Info } from './style';

import { EMAIL_REGEX, PW_REGEX, BIRTH_YEAR, BIRTH_MD } from '../../constants/regex';
import { userJoin } from '../../api/Account';
import { Button } from '../../components/button';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

const Signup = () => {
  const auth = localStorage.getItem('isLogin');
  if (auth) return <Navigate to="/" />;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pwcheckError, setPwcheckError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [dayError, setDayError] = useState(false);

  const { mutate } = useMutation(userJoin, {
    retry: 0,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    },
    onError: error => {
      alert(`${error.code}
      ${error.message}`);
    },
  });

  const handleSignUp = e => {
    e.preventDefault();

    if (
      name === '' ||
      !EMAIL_REGEX.test(email) ||
      !PW_REGEX.test(pw) ||
      pw !== pwcheck ||
      pwcheck === '' ||
      !BIRTH_YEAR.test(year) ||
      !BIRTH_MD.test(month) ||
      !BIRTH_MD.test(day)
    ) {
      if (name === '') setNameError(true);
      if (!EMAIL_REGEX.test(email)) setEmailError(true);
      if (!PW_REGEX.test(pw)) setPwError(true);
      if (pw !== pwcheck || pwcheck === '') setPwcheckError(true);
      if (!BIRTH_YEAR.test(year)) setYearError(true);
      if (!BIRTH_MD.test(month)) setMonthError(true);
      if (!BIRTH_MD.test(day)) setDayError(true);
      return;
    }
    mutate({
      nickname: name,
      email: email,
      password: pw,
      birthday: `${year}-${month}-${day}`,
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
      if (id === 'pwcheck') {
        setPwcheckError(false);
        setPwcheck(e.target.value);
      }
      if (id === 'year') {
        setYearError(false);
        setYear(e.target.value);
      }
      if (id === 'month') {
        setMonthError(false);
        setMonth(e.target.value);
      }
      if (id === 'day') {
        setDayError(false);
        setDay(e.target.value);
      }
    },
    [name, email, pw, year, month, day],
  );

  return (
    <Layout>
      <Wrapper>
        <FormWrap>
          <form>
            <TextInput
              id="name"
              label="Nickname"
              errorMsg="이름을 입력해 주세요."
              isError={nameError}
              value={name}
              onChange={handleChangeSign}
              placeholder="NickName"
            />
            <TextInput
              id="email"
              label="Email"
              errorMsg="이메일 형식을 맞춰주세요."
              isError={emailError}
              value={email}
              onChange={handleChangeSign}
              placeholder="Mail-address"
            />
            <TextInput
              id="pw"
              type="password"
              label="Password"
              errorMsg="8자 이상, 문자, 숫자, 특수문자가 하나씩 들어가야 합니다."
              isError={pwError}
              value={pw}
              onChange={handleChangeSign}
              placeholder="Password"
            />
            <TextInput
              id="pwcheck"
              type="password"
              label="Password Again"
              errorMsg="상단 password와 동일해야합니다."
              isError={pwcheckError}
              value={pwcheck}
              onChange={handleChangeSign}
              placeholder="Password Again"
            />
            Birth
            <Birth>
              <TextInput
                id="year"
                label="year"
                errorMsg="4자리 숫자를 입력해 주세요."
                isError={yearError}
                value={year}
                onChange={handleChangeSign}
                placeholder="year"
              />
              <TextInput
                id="month"
                label="month"
                errorMsg="1~2자리 숫자를 입력해 주세요."
                isError={monthError}
                value={month}
                onChange={handleChangeSign}
                placeholder="month"
              />
              <TextInput
                id="day"
                label="day"
                errorMsg="1~2자리 숫자를 입력해 주세요."
                isError={dayError}
                value={day}
                onChange={handleChangeSign}
                placeholder="day"
              />
            </Birth>
            <Button label="Join" onClick={handleSignUp}>
              Join
            </Button>
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
