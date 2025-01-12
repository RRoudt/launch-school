/* Small Problems - Medium 3: Rotation (Part 3)

Instructions:
- Write a function that takes an integer as an argument and returns the maximum rotation of that integer. Example:
  - Take the number 735291 and rotate it by one digit to the left, getting 352917.
  - Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
  - Keep the first two digits fixed in place and rotate again to get 321759.
  - Keep the first three digits fixed in place and rotate again to get 321597.
  - Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579.
- You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
- The resulting number is called the maximum rotation of the original number.

Example
735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579
^----^     ^---^      ^--^       ^-^        ^^

Input:
- A number

Output:
- A number based on the input, rotated for the maximum amount of times

Questions:
Q: What is a rotation?
  A: The first digit of the number is moved to the end of the number
Q: What is a maximum rotation?
  A: Every digit in the input number is rotated, from the start to the end, one-by-one
Q: What if an input is empty?
  A: Every test case has at least 1 digit

Rules:
- Input is an integer (never empty)
- Output is an integer, rotated the maximum amount of times
- One rotation = first digit is moved to the end of the number

Data:
- Number (input)
- String (processing)
- Number (output)

Algorithm:
Get a number: num
Determine the number of digits in num: numLength
Start a loop from numLength to 1:
  Get the rotated number of the current number
  Set the current number to the rotated number
Stop looping
Return the last rotated number
*/

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) return undefined;
  if (inputArr.length === 0) return [];

  let copiedArr = inputArr.slice();
  copiedArr.push(copiedArr.shift());

  return copiedArr;
}

function rotateRightmostDigits(num, count) {
  let numStr = String(num);
  let left = numStr.slice(0, -count);
  let right = numStr.slice(-count); 
  let rightSwapped = rotateArray(right.split('')).join('');

  return Number(left + rightSwapped);
}

function maxRotation(num) {
  let numLength = String(num).length;

  for (let count = numLength; count > 1; count -= 1) {
    num = rotateRightmostDigits(num, count)
  }

  return num;

}

// Test cases
console.log(maxRotation(735291) === 321579);              // 321579
console.log(maxRotation(3) === 3);                        // 3
console.log(maxRotation(35) === 53);                      // 53
console.log(maxRotation(105) === 15);                     // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845