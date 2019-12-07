import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const n = Big(num1);
  let evaluation;

  switch (operation) {
    case '+':
      evaluation = n.plus(num2);
      break;
    case '-':
      evaluation = n.minus(num2);
      break;
    case 'x':
      evaluation = n.times(num2);
      break;
    case '÷':
      evaluation = n.div(num2);
      break;
    default:
      evaluation = n.mod(num2);
  }

  return evaluation.toString();
};

export default operate;
