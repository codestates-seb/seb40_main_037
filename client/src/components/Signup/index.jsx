import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../button';

import { Wrapper, FormWrap, Birth, Info } from './style';

const Signup = () => {
  // const auth = localStorage.getItem('isLogin');
  // if (auth) return <Navigate to="/" />;

  // const [email, setEmail] = useState('');
  // const [pw, setPw] = useState('');

  // const [emailError, setEmailError] = useState(false);
  // const [pwError, setPwError] = useState(false);

  // const [isLogin, setIsLogin] = useState(false);

  // const navigate = useNavigate();

  // const { mutate, data } = useMutation(userLogin, {
  //   onSuccess: () => {
  //     setIsLogin(true);
  //   },
  //   onError: error => {
  //     alert(error.message);
  //   },
  // });
  // console.log('!', data);
  // useEffect(() => {
  //   if (isLogin) {
  //     localStorage.setItem('isLogin', true);
  //     localStorage.setItem('token', JSON.stringify(data.headers.authorization));
  //     localStorage.setItem('refreshToken', JSON.stringify(data.headers.refreshtoken));
  //     localStorage.setItem('memberId', JSON.stringify(data.headers.memberid));
  //     navigate('/');
  //   }
  // }, [isLogin]);

  // const handleChangeEmail = useCallback(
  //   e => {
  //     if (EMAIL_REGEX.test(e.target.value)) {
  //       setEmailError(false);
  //     }
  //     setEmail(e.target.value);
  //   },
  //   [email],
  // );

  // const handleChangePw = useCallback(
  //   e => {
  //     if (PW_REGEX.test(e.target.value)) {
  //       setPwError(false);
  //     }
  //     setPw(e.target.value);
  //   },
  //   [pw],
  // );

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!EMAIL_REGEX.test(email) || !PW_REGEX.test(pw)) {
  //     if (!EMAIL_REGEX.test(email)) setEmailError(true);
  //     if (!PW_REGEX.test(pw)) setPwError(true);
  //     return;
  //   }
  //   mutate({
  //     username: email,
  //     password: pw,
  //   });
  // };

  return (
    <Wrapper>
      <FormWrap>
        <form>
          Name
          <input placeholder="NickName" />
          Email
          <input placeholder="ID" />
          Password
          <input type="password" placeholder="Password" />
          Password check
          <input type="password" placeholder="Password Again" />
          Birth
          <Birth>
            <input placeholder="year" /> <input placeholder="month" /> <input placeholder="day" />
          </Birth>
          <Button label="Log in">Login</Button>
        </form>
      </FormWrap>
      <Info>
        <li>
          Have an account? <Link to="/login">Log in</Link>
        </li>
      </Info>
    </Wrapper>
  );
};

export default Signup;
