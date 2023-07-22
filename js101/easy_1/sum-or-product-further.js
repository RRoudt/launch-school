/* Further Exploration of Exercise 6: Sum or Product of Consecutive Integers

Instructions:
- Ask the user to enter a array of integers greater than 0
- Ask if the user wants the sum or the product of all numbers in the array
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