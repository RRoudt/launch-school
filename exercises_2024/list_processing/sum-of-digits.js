/* List Processing 1: Sum of Digits

Instructions:
- Write a function that takes one argument, a positive integer, and returns the sum of its digits.
- Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Input:
- A number (integer)

Output:
- A number (integer, the sum of all digits from the input number)

Rules:
- Return the sum of the digits in the input integer
- Use an array method, not any other looping mechanism

Questions:
-

Data:
- Number (input)
- String (processing)
- Array (processing)
- Number (output)

Algorithm:
Get a number: inputNumber
Turn inputNumber into a string
Turn the string into an array
Iterate over the array:
  Turn the current element into a number
  Add the number to a sum
Enditerate
Return the sum
*/

function sum(inputNumber) {
  return inputNumber
    .toString()
    .split('')
    .reduce((sum, num) => sum + Number(num), 0);
}

// Test cases
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45