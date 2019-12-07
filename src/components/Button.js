import React from 'react';
import PropTypes from 'prop-types'

const Button = (props) => (<div
  className="button"
  onClick={() => props.handleClick(props.children)}>
  {props.children}
</div>);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
