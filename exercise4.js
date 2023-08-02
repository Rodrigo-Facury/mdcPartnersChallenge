function checkPalindrome(word) {
  let isPalindrome = true;

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== word[word.length - 1 - i]) {
      isPalindrome = false;

      break;
    }
  }

  return isPalindrome;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a word to check whether it is a palindrome \n', (str) => {
  console.log(checkPalindrome(str));

  readline.close();
});
