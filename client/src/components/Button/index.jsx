import React from 'react';
import PropTypes from 'prop-types';
import Btn from './style';

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  Selected,
  color,
  Choosed,
  link,
  ...props
}) => {
  return (
    <Btn
      type="button"
      className={[`${primary}`, `${size}`, `${Choosed}`, `${Selected}`].join(' ')}
      style={(backgroundColor && { backgroundColor }, color && { color })}
      {...props}
      value={label}
    >
      {label}
    </Btn>
  );
};

Button.propTypes = {
  primary: PropTypes.oneOf(['Normalbutton', 'Linkbutton', 'Mypagebutton', 'Pagingbutton']),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'header-size']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  Choosed: PropTypes.oneOf(['Choosed']),
  Selected: PropTypes.oneOf(['Selected']),
};

Button.defaultProps = {
  primary: 'Normalbutton',
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};
