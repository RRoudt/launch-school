/* Easy 4.1: Searching 101

Instructions:
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Input:
- 5 numbers to check against
- 1 number to check for

Output:
- A string with the numbers and whether the last number appears

Rules:
- First five entered numbers are to be checked against
- Last entered number will get compared against the already collected numbers
- If the last entered number has been entered before, the output string should be:
  "The number xx appears in xx, xx, xx, xx, xx"
- If the last entered number has not been entered before, the output string should be:
  "The number xx does not appear in xx, xx, xx, xx, xx"
Data:
- Numbers as inputs
- Array as storage for numbers
- String as output

Algorithm:
- Create empty array: numbers
- While not 5 numbers have been entered, ask for a number
  - If no number has been entered, ask again
  - Add collected number to numbers array
- Ask for the last number (the number to compare against): comparisonNumber
- Iterate over the collected numbers and compare it against the comparisonNumber
  - If comparisonNumber appears in collected numbers, log:
    "The number xx appears in xx, xx, xx, xx, xx"
  - Else:
    "The number xx does not appear in xx, xx, xx, xx, xx"
*/

const readline = require('readline-sync');
let numbers = [];
let comparisonNumber;

while (numbers.length < 5) {
  let rank;

  if (numbers.length === 0) {
    rank = 'st';
  } else if (numbers.length === 1) {
    rank = 'nd';
  } else if (numbers.length === 2) {
    rank = 'rd';
  } else {
    rank = 'th';
  }

  let num = Number(readline.question(`Enter the ${numbers.length + 1}${rank} number: `));
  if (Number.isNaN(num)) continue;

  numbers.push(num);
}

while (!comparisonNumber) {
  let num = Number(readline.question(`Enter the last number: `));
  if (Number.isNaN(num)) continue;
  comparisonNumber = num;

  if (numbers.includes(comparisonNumber)) {
    console.log(`The number ${comparisonNumber} does appear in ${numbers}.`);
  } else {
    console.log(`The number ${comparisonNumber} does not appear in ${numbers}.`);
  }
}