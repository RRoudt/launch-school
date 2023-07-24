/* Assignment 16: Calculator Bonus Features

This is is a continuation of calculator-refactored.js.

This was added in comparison to calculator-refactored.js:
[x] Ask the user for another calculation
[x] Extract messages in the program to a configuration file
[x] Internationalization of the messages in the configuration file

Pseudocode ask the user for another calculation:
WHILE iterator equals true
  GET number1 from user
  GET number2 from user
  GET operation from user
  PRINT calculation
  GET input from user (continue? y/n)

Steps to extract messages to a configuration file:
- Create calculator_messages.json
- Initialize MSG const, requiring calculator_messages.json
- Cut-paste the messages into calculator_messages.json and give descriptive keys
- Add references to messages object for the messages in calculator-bonus.js

Steps to add internationalization support:
- Nest localized messages inside a nested object in calculator_message.json
- Initialize a LANG const, containing a two-letter code for the language]
- Update MSG references to MSG[LANG] references
*/

const MSG = require('./calculator_messages.json');
const readline = require('readline-sync');

// Set language: "en" for English, "nl" for Dutch
const LANG = "nl";

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
    prompt(MSG[LANG].invalidNumber);
    num = readline.question();
  }

  return Number(num);
}

// Prompt user for operation
function getOperation() {
  prompt(MSG[LANG].getOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MSG[LANG].invalidOperation);
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
      return MSG[LANG].invalidOperation;
  }
}

prompt(MSG[LANG].welcomeMessage);

// Ask the user for the numbers and operation
while (true) {
  const number1 = getNumber(MSG[LANG].getFirstNumber);
  const number2 = getNumber(MSG[LANG].getSecondNumber);
  const operation = getOperation();

  console.log(calculate(number1, number2, operation));
  if (readline.question(MSG[LANG].anotherCalcPrompt).toLowerCase() === 'n') break;
}