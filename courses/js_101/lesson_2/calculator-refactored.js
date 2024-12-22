// JS101 - Lesson 2.9: Refactoring Calculator

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`)
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Greet the user
prompt("Welcome to Calculator!");

// Ask the user for the first number.
prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

// Ask the user for the second number.
prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

// Ask the user for an operation to perform.
prompt(`What operation would you like to perform?
1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();
while(!['1', '2', '3', '4'].includes(operation)) {
  prompt(`Hmm... that doesn't look like a valid operation. Please choose a valid one:
    1) Add 2) Subtract 3) Multiply 4) Divide`);
    operation = readline.question();
}

// Perform the operation on the two numbers.
let result = 0;
switch (operation) {
  case "1":
    result = Number(number1) + Number(number2);
    break;
  case "2":
    result = Number(number1) - Number(number2);
    break;
  case "3":
    result = Number(number1) * Number(number2);
    break;
  case "4":
    result = Number(number1) / Number(number2);
    break;
}

// Print the result to the terminal.
console.log(result);
