import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './style';
import { Underbox_item } from '../../constants/header_footer';

const HeaderBottom = ({ isHeaderBottom }) => {
  return { isHeaderBottom } ? (
    <Wrapper>
      {Underbox_item.map((items, i) => {
        const { title, image, link } = items;
        return (
          <li key={i}>
            <Link to={link}>
              <span>{title}</span>
            </Link>
          </li>
        );
      })}
    </Wrapper>
  ) : (
    <></>
  );
};

export default HeaderBottom;
