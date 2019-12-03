import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = (props) => {
  const { result } = props;
  return <div className="display">{result}</div>;
};

Display.defaultProps = {
  result: 'o',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
