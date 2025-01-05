/* Easy 5.8: List of Digits

Instructions:
- Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Input:
- A positive integer

Output:
- An array of digits

Rules:
- Each element in the output array should have one digit

Questions:
Q: What if no argument is given?
  A: Let's assume an empty array is returned

Data:
- Number (input)
- Array of numbers (output)

Algorithm:
Get number: inputNumber
Turn inputNumber into a string
Turn the string into an array
Iterate over the array:
  Add number version of current element to a new array
Enditerate
Return the new array
*/

function digitList(inputNumber) {
  return String(inputNumber).split('').map(digit => Number(digit));
}

// Test cases
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]