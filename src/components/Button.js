import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;

  return <div>{buttonName}</div>;
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
