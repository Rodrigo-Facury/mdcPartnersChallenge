function calculator(num1, num2, operator) {
  const operationByOperator = {
    '+': () => num1 + num2,
    '-': () => num1 - num2,
    '*': () => num1 * num2,
    '/': () => num1 / num2,
  }

  return operationByOperator[operator]();
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter two numbers and an operator to calculate (Example: 2 5 +) \n', (operation) => {
  const [num1, num2, operator] = operation.split(' ');

  try {
    console.log(calculator(Number(num1), Number(num2), operator));
  } catch (err) {
    console.log(err);
  }

  readline.close();
});
