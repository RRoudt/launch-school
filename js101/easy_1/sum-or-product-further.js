/* Further Exploration of Exercise 6: Sum or Product of Consecutive Integers

Instructions:
- Ask the user to enter a array of integers greater than 0
- Ask if the user wants the sum or the product of all numbers in the array

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
[x] IF operation === 's'
  [x] SET iterator = 1
  [x] WHILE iterator below or equal to number
    total += iterator
  [x] PRINT total: "The sum of the integers between 1 and number is xxx."
[x] ELSE
  [x] SET total = 0;
  [x] SET iterator = 1
  [x] WHILE iterator below or equal to number
    total *= iterator
  [x] PRINT total: "The product of the integers between 1 and number is xxx."
*/

const readline = require('readline-sync');
let numbers;
let operation;
let total = 0;

function getArray(numbers) {
  return numbers.split(',');
}

function computeSum(numbers) {
  const arr = getArray(numbers);
  return arr.reduce((sum, num) => sum + Number(num), 0);
}

function computeProduct(numbers) {
  const arr = getArray(numbers);
  return arr.reduce((sum, num) => sum * Number(num), 1);
}

do {
  numbers = readline.question("Please enter an series of integers greater than 0, split by a comma without space (1,2,3): ");
} while (numbers.trimStart() === '');

do {
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
} while (operation !== 's' && operation !== 'p');

if (operation === 's') {
  // Sum
  total = computeSum(numbers);

  console.log(`The sum of ${numbers} is ${total}`);
} else {
  // Product
  total = computeProduct(numbers);

  console.log(`The product of the integers between 1 and ${numbers} is ${total}`);
}