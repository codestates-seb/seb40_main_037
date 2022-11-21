import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Headerbox, UserBox, UserDropBox } from './style';
import { Button } from '../button';
import { Dropbox_item } from '../../constants/header_footer';

import Userimg from '../../assets/User.gif';
import Hamburger from '../../assets/Hamburger_icon.png';

const Header = () => {
  const [isMenuHamburger, setIsMenuHamburger] = useState(false);

  const handleToggle = () => {
    setIsMenuHamburger(!isMenuHamburger);
  };

  return (
    <Wrapper>
      <Headerbox>
        <UserBox>
          <Link to="/">
            <Button primary="Mypagebutton" label="logo" />
          </Link>
        </UserBox>
        <UserBox>
          <input type="text" placeholder="Search..." />
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
                return (
                  <li key={i}>
                    <Link to={link}>
                      <span>{title}</span>
                      <span>{detail}</span>
                    </Link>
                  </li>
                );
              })}
            </UserDropBox>
          )}
        </UserBox>
      </Headerbox>
    </Wrapper>
  );
};

export default Header;
