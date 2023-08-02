function isPrime(num) {
  let numIsPrime = true;

  for (let i = 2; i <= Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      numIsPrime = false;

      break;
    }
  }

  return numIsPrime;
}

// prompt logic based on https://www.codecademy.com/article/getting-user-input-in-node-js

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Please press "Enter" to get a list of the first 10 prime numbers', () => {
  const primeNumbers = [];

  for (let i = 2; primeNumbers.length < 10; i += 1) {
    if (isPrime(i)) {
      console.log(i);
      primeNumbers.push(i);
    }
  }

  readline.close();
});
