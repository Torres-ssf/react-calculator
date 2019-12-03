import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, color, wide } = props;
  const buttonWide = wide ? '0 0 50%' : '0 0 25%';

  const styles = {
    backgroundColor: color,
    flex: buttonWide,
  };

  return <div className="button" style={styles}>{buttonName}</div>;
};

export default Button;

Button.defaultProps = {
  color: '#F5913E',
  wide: false,
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
