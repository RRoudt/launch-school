/* Assignment 16: Calculator Bonus Features

This is is a continuation of calculator-refactored.js.

This was added in comparison to calculator-refactored.js:
[x] Ask the user for another calculation
[x] Extract messages in the program to a configuration file
[] Internationalization of the messages in the configuration file

Pseudocode ask the user for another calculation:
WHILE iterator equals true
  GET number1 from user
  GET number2 from user
  GET operation from user
  PRINT calculation
  GET input from user (continue? y/n)
*/

const MSG = require('./calculator_messages.json');
const readline = require('readline-sync');

// Prettier console log when asking questions
function prompt(message) {
  console.log(`=> ${message}`);
}

// Check if inputted number is invalid
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// Prompt user for number
function getNumber(promptMessage) {
  prompt(promptMessage);

  let num = readline.question();

  while (invalidNumber(num)) {
    prompt(MSG.invalidNumber);
    num = readline.question();
  }

  return Number(num);
}

// Prompt user for operation
function getOperation() {
  prompt(MSG.getOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MSG.invalidOperation);
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
      return MSG.invalidOperation;
  }
}

prompt(MSG.welcomeMessage);

// Ask the user for the numbers and operation
while (true) {
  const number1 = getNumber(MSG.getFirstNumber);
  const number2 = getNumber(MSG.getSecondNumber);
  const operation = getOperation();

  console.log(calculate(number1, number2, operation));
  if (readline.question(MSG.anotherCalcPrompt).toLowerCase() === 'n') break;
}