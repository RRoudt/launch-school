/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* Easy 4.9: Convert a String to a Number

Instructions:
- Write a function that takes a string of digits and returns the appropriate number as an integer.
- You may not use parseInt() or Number().
- Do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
- You may not use any of the standard conversion methods available in JavaScript, such as String() and Number().
- Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Input:
- String of numbers

Output:
- Integer value of input string

Rules:
- It's not allowed to use type version methods
- All characters will be numeric (but as data type string)

Questions:
- How can I iterate over a string and correctly add up the numbers?

Data:
- String as input
- Number as output

Algorithm:
- Get a string of numbers
- Create an empty number variable: totalNum
- Iterate through the string, character by character
  - Iterate from beginning to end, but use a reverse counter (starting from high to low)
  - For each character, get the number version
  - Reassign totalNum to:
    - (totalNum * 10) + num
      - totalNum * 10 is to account for the position of the previous number in the total number
*/

function charToNum(char) {
  switch (char) {
    case '0':
      return 0;
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    default:
      return NaN;
  }
}

function stringToInteger(str) {
  let totalNum = 0;

  for (let index = 0; index < str.length; index++) {
    let num = charToNum(str[index]);
    totalNum = (10 * totalNum) + num;
  }

  return totalNum;
}

// Test cases
console.log(stringToInteger("4321") === 4321);  // logs true
console.log(stringToInteger("570") === 570);    // logs true