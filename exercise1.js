function calculator(num1, num2, operator) {
  const operationByOperator = {
    '+': () => num1 + num2,
    '-': () => num1 - num2,
    '*': () => num1 * num2,
    '/': () => num1 / num2,
  }

  return operationByOperator[operator];
}