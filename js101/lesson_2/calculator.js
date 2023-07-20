/* Exercise 5: Calculator (walkthrough) 

[x] Ask the user for the first number
[x] Ask the user for the second number
[x] Ask the user for an operation to perform
   - add, subtract, multiply or divide.
[x] Perform the calculation and display the result.
*/

const readline = require('readline-sync');

function calculate(number1, number2, operation) {
  switch (operation) {
    // Add
    case '1':
      return 'Result: ' + (Number(number1) + Number(number2));
    // Subtract
    case '2':
      return 'Result: ' + (Number(number1) - Number(number2));

    // Muiltiply
    case '3':
      return 'Result: ' + (Number(number1) * Number(number2));

    // Divide
    case '4':
      return 'Result: ' + (Number(number1) / Number(number2));

    // Any other value entered as operation
    default:
      return "Invalid operation";
  }
}

console.log('Welcome to Calculator!');

// Ask the user for the numbers and operation
const number1 = readline.question("What's the first number?\n");
const number2 = readline.question("What's the second number?\n");
const operation = readline.question("What's the operation?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n"); 

console.log(calculate(number1, number2, operation));