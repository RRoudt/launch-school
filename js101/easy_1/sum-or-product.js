/* Exercise 6: Sum or Product of Consecutive Integers

Instructions:
- Ask the user to enter an integer (n) greater than 0
- Ask if the user wants the sum or the product of all numbers between 1 and n

Example 1:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Example 2:
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Pseudocode:
[x] SET total
[x] GET and SET number from user
[x] GET and SET operation from user while no valid input ('s' or 'p')
  [x] SET to 's' to compute the sum
  [x] SET to 'p' to compute the product
IF operation === 's'
  SET iterator = 1
  WHILE iterator below or equal to number
    total += iterator
  PRINT total: "The sum of the integers between 1 and number is xxx."
ELSE
  SET iterator = 1
  WHILE iterator below or equal to number
    total *= iterator
  PRINT total: "The product of the integers between 1 and number is xxx."
*/

const readline = require('readline-sync');
let number;
let operation;
let total = 0;

do {
  number = readline.question("Please enter an integer greater than 0: ");
} while (number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0);

// Turn number from string into a number to be used later
number = Number(number);

do {
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
} while (operation !== 's' && operation !== 'p');

if (operation === 's') {
  // Sum
  for (let index = 1; index <= number; index += 1) {
    total += index;
  }

  console.log(`The sum of the integers between 1 and ${number} is ${total}`);
} else {
  // Product
  total = 1;
  for (let index = 1; index <= number; index += 1) {
    total *= index;
  }

  console.log(`The product of the integers between 1 and ${number} is ${total}`);
}