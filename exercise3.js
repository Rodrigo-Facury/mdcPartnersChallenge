function factorial(num) {
  if (!Number.isInteger(num)) {
    return 'You must enter an integer';
  }

  let factorialNumber = num;

  for (let i = num - 1; i >= 2; i -= 1) {
    factorialNumber = factorialNumber * i;
  }

  return factorialNumber;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter an integer to calculate its factorial \n', (num) => {
  try {
    const parsedNum = Number(num);

    console.log(factorial(parsedNum));
  } catch (err) {
    console.log(err);
  }

  readline.close();
});
