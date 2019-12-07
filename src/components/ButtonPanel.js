import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
  const buttons = [
    'AC', 'DEL', '%', '÷', '7',
    '8', '9', 'x', '4', '5',
    '6', '-', '1', '2', '3',
    '+', '0', '.', '+/-', '=',
  ];

  return (
    <div className="button-panel">
      {buttons.map((elem, i) => (<Button handleClick={props.handleClick} key={i}>{elem}</Button>))}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
