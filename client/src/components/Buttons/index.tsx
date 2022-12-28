import PropTypes from 'prop-types';
import { Btn } from './style';

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
}: {
  primary: string | undefined;
  backgroundColor: string | undefined;
  size: string | undefined;
  label: string | undefined;
  Selected: string | undefined;
  color: string | undefined;
  Choosed: string | undefined;
  link: string | undefined;
}) => {
  return (
    <Btn
      type="button"
      className={[`${primary}`, `${size}`, `${Choosed}`, `${Selected}`].join(' ')}
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
