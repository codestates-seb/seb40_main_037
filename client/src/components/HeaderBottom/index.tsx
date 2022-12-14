import { Link } from 'react-router-dom';

import { Wrapper } from './style';
import { Underbox_item } from '../../constants/header_footer';

const HeaderBottom = ({ isHeaderBottom }: { isHeaderBottom: boolean }) => {
  const isLogin = localStorage.getItem('isLogin');

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
                window.location.replace('/');
              }}
            >
              <span>{title}</span>
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
