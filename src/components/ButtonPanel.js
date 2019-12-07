import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
  const buttons = [
    'AC', '+/-', '%', '÷', '7', 
    '8', '9', 'X', '4', '5',
    '6', '-', '1', '2', '3',
    '+', '0', '.', '=',
  ];

  return (
    <div className="button-panel">
      {buttons.map((e, i) => (<Button handleClick={props.handleClick} key={i}>{e}</Button>))}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
