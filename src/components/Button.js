import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) =>
  <div>{props.buttonName}</div>

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};
