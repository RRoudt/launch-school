/* Easy 2.5: Arithmetic Integer

Instructions:
- Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Input:
- Two positive integers (numbers)

Output:
- Strings (numeric operations on the two inputs)
  - Addition
  - Subtraction
  - Product
  - Quotient
  - Remainer
  - Power

Rules:
- Input is always two positive, whole numbers

Data:
- Numbers (input)
- Numbers (calculations)
- Strings (output)

Algorithm: 
Get num1
Get num2
Display addition formula
Display subtraction formula
Display product formula
Display division (quotient) formula
Display remainder formula
Display power formula
*/

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Enter the first number:`);
let num1 = parseInt(readline.question());

prompt(`Enter the second number:`);
let num2 = parseInt(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);