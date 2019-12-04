const calculate = (data, button) => {
  const { total, next, operation } = data;

  return {
    total,
    next,
    operation,
  }
};

export default calculate;