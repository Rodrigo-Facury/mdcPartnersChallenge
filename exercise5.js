function table(num) {
  for (let i = 1; i <= 10; i += 1) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number to see its table \n', (num) => {
  table(num);

  readline.close();
});
