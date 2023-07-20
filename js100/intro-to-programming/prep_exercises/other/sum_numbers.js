let rlSync = require('readline-sync');

let firstNumber = rlSync.question("Enter the first number:\n");
let secondNumber = rlSync.question("Enter the second number:\n");
let sum = Number(firstNumber) + Number(secondNumber);

console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${sum}`);