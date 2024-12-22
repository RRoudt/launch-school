/* Easy 1.6: Sum or Product of Consecutive Integers

Instructions:
- Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s
The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p
The product of the integers between 1 and 6 is 720.

Input:
- Integer higher than 0
- "s" or "p" to determine between algorithm

Output:
- Sum or product of the integer

Rules:
- Calculate from 1 to entered integer (inclusive)

Data:
- String (to determine algoritm)
- Number

Algorithm:
+ Get a positive integer from user
+ Get algorithm choice from user
+ If choice == "s"
  + Set a variable sum
  + Start a loop starting at 1 for amount of times given as integer
    + For each iteration, increment sum by the value of the current iteration
  + Show value of sum
+ If choice == "p"
  + Set a variable product
  + Start a loop starting at 1 for amount of times given as integer
    + For each iteration, multiply the value of the product with the value of the current iteration, and add that to product
  + Show value of product
*/

const readline = require("readline-sync");

function getSum(targetNum) {
  let sum = 0;

  for (let count = 1; count <= targetNum; count += 1) {
    sum += count;
  }

  return `The sum of the integers between 1 and ${targetNum} is ${sum}.`;
}

function getProduct(targetNum) {
  let product = 1;

  for (let count = 1; count <= targetNum; count += 1) {
    product *= count;
  }

  return `The product of the integers between 1 and ${targetNum} is ${product}.`;
}

let targetNum = 0;
do {
  console.log(`Please enter an integer greater than 0:`);
  targetNum = Number(readline.prompt());
} while (targetNum <= 0);

let algoChoice = '';
do {
  console.log(`Enter "s" to compute the sum, or "p" to compute the product:`);
  algoChoice = readline.prompt();
} while (algoChoice !== "s" && algoChoice !== "p");

let result = algoChoice === "s" ? getSum(targetNum) : getProduct(targetNum);

console.log(result);