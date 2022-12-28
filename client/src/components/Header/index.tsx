import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Headerbox, UserBox, UserDropBox } from './style';
import { Dropbox_item } from '../../constants/header_footer';

import Userimg from '/assets/User.gif';
import Hamburger from '/assets/Hamburger_icon.png';

const Header = ({ isHeader }: { isHeader: boolean }) => {
  const [isMenuHamburger, setIsMenuHamburger] = useState(false);

  const isLogin = localStorage.getItem('isLogin');

  const handleToggle = () => {
    setIsMenuHamburger(!isMenuHamburger);
  };

  return isHeader ? (
    <Wrapper>
      <Headerbox>
        <UserBox>
          <Link to="/">
            <img src="/assets/Logo.png" alt="" className="logo" />
          </Link>
        </UserBox>
        <UserBox>
          <input type="text" placeholder="Search..." disabled={true} />
        </UserBox>
        <UserBox>
          <button className={isMenuHamburger ? 'active' : ''} onClick={() => handleToggle()}>
            <img src={Hamburger} className="HamImg" />
            <img src={Userimg} className="UserImg" />
          </button>
          {isMenuHamburger && (
            <UserDropBox>
              {Dropbox_item.map((items, i) => {
                const { title, detail, link } = items;
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
                        window.location.replace('/');
                      }}
                    >
                      <span>{title}</span>
                      <span>{detail}</span>
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      <Link to={link}>
                        <span>{title}</span>
                        <span>{detail}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </UserDropBox>
          )}
        </UserBox>
      </Headerbox>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Header;
