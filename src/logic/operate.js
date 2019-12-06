import { evaluate } from 'mathjs';

const operate = (num1, num2, operation) => {
  let op;
  if (operation === 'X') {
    op = '*';
  } else if (operation === '÷') {
    op = '/';
  } else {
    op = operation;
  }

  return evaluate(`${num1}${op}${num2}`);
};

export default operate;
