/* eslint-disable max-len */
/* Easy 4.11: Convert a Number to a String

Instructions:
- Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
- You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Input:
- Positive integer

Output:
- Number version of string input

Rules:
- Input will be positive integers only (in string format)
- It's not allowed to use built-in methods to coerce a character to another datatype
  - Nor using expressions like '' + number

Data:
- Number as input
- String as output
- Array for lookups

Algorithm:
- Get a number
- Create an array containing the string version of characters
- Create an empty string array to hold the final result
- Iterate over the number
  - While the number is above 0
    - Store the remainder of the number divided by 10
    - Set the number to the number / 10 (rounded down)
    - Use the stored remainder to access the string version of the character and save it to the result string
*/

function integerToString(num) {
  const stringChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultStr = '';
  do {
    let index = num % 10;
    num = Math.floor(num / 10);
    resultStr = stringChars[index] + resultStr;
  } while (num > 0);

  return resultStr;
}

// Test cases
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"