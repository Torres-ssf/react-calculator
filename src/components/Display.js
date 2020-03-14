import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = (props) => {
  const { result, animation, setAnim } = props;
  return (
    <div className="display">
      <span 
        className={`span-ripple ${animation}`}
        onAnimationEnd={() => setAnim(false)} />
      <p>{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
  animation: PropTypes.string,
  setAnim: PropTypes.func,
};

export default Display;
