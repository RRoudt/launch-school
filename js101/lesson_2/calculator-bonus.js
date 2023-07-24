/* Assignment 16: Calculator Bonus Features

This is is a continuation of calculator-refactored.js.

This was added in comparison to calculator-refactored.js:
[] Ask the user for another calculation
[] Extract messages in the program to a configuration file
[] Internationalization of the messages in the configuration file

Pseudocode ask the user for another calculation:
WHILE iterator equals true
  GET number1 from user
  GET number2 from user
  GET operation from user
  PRINT calculation
  GET input from user (continue? y/n)
*/

const readline = require('readline-sync');

// Prettier console log when asking questions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Check if inputted number is invalid
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// Prompt user for number
function getNumber(msg) {
  prompt(msg);

  let num = readline.question();

  while (invalidNumber(num)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num = readline.question();
  }

  return Number(num);
}

// Prompt user for operation
function getOperation() {
  prompt("What's the operation?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose 1, 2, 3, or 4");
    operation = readline.question();
  }

  return operation;
}

function calculate(number1, number2, operation) {
  switch (operation) {
    // Add
    case '1':
      return `${number1} + ${number2} = ` + (Number(number1) + Number(number2));

    // Subtract
    case '2':
      return `${number1} - ${number2} = ` + (Number(number1) - Number(number2));

    // Muiltiply
    case '3':
      return `${number1} * ${number2} = ` + (Number(number1) * Number(number2));

    // Divide
    case '4':
      return `${number1} / ${number2} = ` + (Number(number1) / Number(number2));

    // Any other value entered as operation
    default:
      return "Invalid operation";
  }
}

prompt('Welcome to Calculator!');

// Ask the user for the numbers and operation
const number1 = getNumber("What's the first number?");
const number2 = getNumber("What's the second number?");
const operation = getOperation();

console.log(calculate(number1, number2, operation));