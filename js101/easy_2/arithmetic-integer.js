/* Easy 2.5: Arithmetic Integer

Input:
- Two positive integers

Output:
- Print the results of the following operations on those integers:
  - Addition
  - Subtraction
  - Product
  - Quotient
  - Remainder
  - Power

Pseudocode:
GET number1
GET number2
PRINT number1 + number2
PRINT number1 - number2
PRINT number1 * number2
PRINT number1 / number2
PRINT number1 % number2
PRINT number1 ** number2
*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

const number1 = Number(readline.question(prompt("Enter the first number:")));
const number2 = Number(readline.question(prompt("Enter the second number:")));

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${number1 ** number2}`);

// Test case:
/* ==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23 */