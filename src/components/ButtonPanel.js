import React from 'react';
import Button from './Button';

const ButtonPanel = () =>
  (
    <div>
      <Button buttonName="AC, +/-, %, ÷" />
      <div>7, 8, 9, X</div>
      <div>4, 5, 6, -</div>
      <div>1, 2, 3, +</div>
      <div>0, ., =</div>
    </div>
  );

export default ButtonPanel;
