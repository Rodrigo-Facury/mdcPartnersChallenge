function investmentCalculator(investmentInfo) {
  const investmentInfoArray = investmentInfo.split(' ');

  const initialCapital = Number(investmentInfoArray[0]);
  const interestRate = Number(investmentInfoArray[1]);
  const months = Number(investmentInfoArray[2]);

  let amount = initialCapital;

  for (let i = 1; i <= months; i += 1) {
    amount = amount + amount * interestRate;
  }

  return (amount.toFixed(2));
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the capital, interest rate (per month), and investment time (in months) to check the final investment value. (Example: 1550.20 0.02 36) \n", (investmentInfo) => {
  console.log(investmentCalculator(investmentInfo));

  readline.close();
});
