import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick, children } = props;

  return (
    <div
      className="button"
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
