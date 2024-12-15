/*
Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

Rules:
+ Generate a randomNumber: 0 or 1
+ Log 'Yes!' if randomNumber is 1
+ Log 'No.' if randomNumber is 0
*/

let randomNumber = Math.round(Math.random());

let randomWord = randomNumber ? 'Yes!' : 'No.';

console.log(randomWord);