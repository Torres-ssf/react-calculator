import operate from './operate';

const calculate = (data, button) => {
  let { total, next, operation } = data;

  const operations = ['+', '-', '÷', 'X', '%'];

  if (button === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (button === 'DEL') {
    if (next) {
      if (next.length === 2 && next.match(/-/)) {
        next = null;
      } else {
        next = next.length === 1 ? null : next.slice(0, -1);
      }
    } else if (operation) {
      operation = null;
    } else if (total) {
      if (total.length === 2 && total.match(/-/)) {
        total = null;
      } else {
        total = total.length === 1 ? null : total.slice(0, -1);
      }
    }
  } else if (button === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operations.includes(button)) {
    if (total && next && operation) {
      total = operate(total, next, operation);
      operation = button;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = button;
      next = null;
    } else {
      operation = button;
    }
  } else if (button === '+/-') {
    if (next) {
      next = operate(next, '-1', 'X');
    } else if (total) {
      total = operate(total, '-1', 'X');
    }
  } else if (next) {
    if (button !== '.' || (button === '.' && next.indexOf(button) < 0)) {
      next = next.concat(button);
    }
  } else {
    next = button;
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
