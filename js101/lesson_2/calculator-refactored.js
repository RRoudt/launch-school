/* Exercise 7: Refactoring Calculator (walkthrough)

This is my twist on the refactoring walkthrough.

[x] Add a distinctive prompt
[x] Ask the user for the first number
  [x] Check if input is a number
[x] Ask the user for the second number
  [x] Check if input is a number
[x] Ask the user for an operation to perform
  [x] Check input is 1, 2, 3, or 4
[x] Perform the calculation and display the result.
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