function gradesAverage(grades) {
  const gradesArray = grades.split(' ');

  const gradesSum = gradesArray.reduce((acc, cur) => Number(acc) + Number(cur));

  return Math.round(gradesSum / 3);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the student's grades here. (Example: 75.2 80 90.3) \n", (grades) => {
  console.log(gradesAverage(grades));

  readline.close();
});
