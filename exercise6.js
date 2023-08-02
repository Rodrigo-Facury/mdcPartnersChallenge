function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  
  return count;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a word to count its vowels \n', (str) => {
  console.log(countVowels(str));

  readline.close();
});
