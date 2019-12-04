const Big = require('big.js')

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;

    case '-':
      result = numOne.minus(numTwo);
      break;

    case '*':
      result = numOne.times(numTwo);
      break;

    case '÷':
      result = numOne.div(numTwo);
      break;

    default:
      console.log('Not supported');
  }

  return result.toFixed(2);
}

// export default operate;

console.log(operate(0, 10, '÷'));