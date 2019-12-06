import { evaluate } from 'mathjs';

const operate = (num1, num2, operation) => {
  if(operation === 'X') operation = '*';
  if(operation === '÷') operation = '/';
  return evaluate(`${num1}${operation}${num2}`);
};

export default operate;