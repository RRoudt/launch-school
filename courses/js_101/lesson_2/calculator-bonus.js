// JS101 - Lesson 2.16: Calculator Bonus Features

const readline = require('readline-sync');
const msg = require('./calculator-messages.json');

function prompt(message) {
  console.log(`=> ${message}`)
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let continueCalculating = 'y';

do {
  // Give user language selection
  let langOptions = Object.keys(msg);
  let lang = '';
  while(!langOptions.includes(lang)) {
    prompt(`Pick a language: ${langOptions.join(', ')}`);
    lang = readline.question();
  }

  // Greet the user
  prompt(msg[lang].welcome);

  // Ask the user for the first number.
  prompt(msg[lang].firstNumberPrompt);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msg[lang].invalidNumber);
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(msg[lang].secondNumberPrompt);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msg[lang].invalidNumber);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(msg[lang].operationPrompt);
  let operation = readline.question();
  while(!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg[lang].invalidOperation);
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

  prompt(msg[lang].continueCalculating);
  continueCalculating = readline.prompt().toLowerCase();
} while (continueCalculating === 'y');