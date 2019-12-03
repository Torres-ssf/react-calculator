import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) =>
  <p>{props.result}</p>

Display.defaultProps = {
  result: 'o'
};

Display.propTypes = {
  result: PropTypes.string.isRequired
};

export default Display;
