// JS101 - Lesson 2.5: Calculator

const readline = require('readline-sync');

// Greet the user
console.log("Welcome to Calculator!");

// Ask the user for the first number.
console.log("What's the first number?");
let number1 = Number(readline.question());

// Ask the user for the second number.
console.log("What's the second number?");
let number2 = Number(readline.question());

// Ask the user for an operation to perform.
console.log(`What operation would you like to perform?
1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();

// Perform the operation on the two numbers.
let result = 0;
switch (operation) {
  case "1":
    result = number1 + number2;
    break;
  case "2":
    result = number1 - number2;
    break;
  case "3":
    result = number1 * number2;
    break;
  case "4":
    result = number1 / number2;
    break;
}

// Print the result to the terminal.
console.log(result);
