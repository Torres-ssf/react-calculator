import React from 'react';
import Button from './Button';

const ButtonPanel = (props) => {
  const greyColor = '#E0E0E0';

  return (
    <div className="buttonPanel flex">
      <div className="group g1">
        <Button buttonName="AC" color={greyColor} />
        <Button buttonName="+/-" color={greyColor} />
        <Button buttonName="%" color={greyColor} />
        <Button buttonName="÷" />
      </div>
      <div className="group g2">
        <Button buttonName="7" color={greyColor} />
        <Button buttonName="8" color={greyColor} />
        <Button buttonName="9" color={greyColor} />
        <Button buttonName="X" />
      </div>
      <div className="group g3">
        <Button buttonName="4" color={greyColor} />
        <Button buttonName="5" color={greyColor} />
        <Button buttonName="6" color={greyColor} />
        <Button buttonName="-" />
      </div>
      <div className="group g4">
        <Button buttonName="1" color={greyColor} />
        <Button buttonName="2" color={greyColor} />
        <Button buttonName="3" color={greyColor} />
        <Button buttonName="+" />
      </div>
      <div className="group g5">
        <Button buttonName="0" color={greyColor} wide />
        <Button buttonName="." type="" color={greyColor} />
        <Button buttonName="=" type="equality" />
      </div>
    </div>
  );
};

export default ButtonPanel;
