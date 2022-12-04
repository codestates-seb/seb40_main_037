import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './style';
import { Underbox_item } from '../../constants/header_footer';

const HeaderBottom = ({ isHeaderBottom }) => {
  const isLogin = localStorage.getItem('isLogin');
  const [isLogout, setisLogout] = useState(false);

  return isHeaderBottom ? (
    <Wrapper>
      {Underbox_item.map((items, i) => {
        const { title, link } = items;
        if (isLogin && (title === 'Log in' || title === 'Sign up')) {
          return;
        } else if (!isLogin && (title === 'My page' || title === 'Log out')) {
          return;
        } else if (title === 'Log out') {
          return (
            <li
              key={i}
              onClick={() => {
                localStorage.clear();
                setisLogout(true);
              }}
            >
              <Link>
                <span>{title}</span>
              </Link>
            </li>
          );
        } else {
          return (
            <li key={i}>
              <Link to={link}>
                <span>{title}</span>
              </Link>
            </li>
          );
        }
      })}
    </Wrapper>
  ) : (
    <></>
  );
};

export default HeaderBottom;
