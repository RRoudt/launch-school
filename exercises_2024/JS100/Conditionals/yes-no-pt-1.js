/*
The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

Rules:
+ Generate a randomNumber: 0 or 1
+ Log 'Yes!' if randomNumber is 1
+ Log 'No.' if randomNumber is 0
*/

let randomNumber = Math.round(Math.random());

let randomWord = randomNumber === 1 ? 'Yes!' : 'No.';

console.log(randomWord);