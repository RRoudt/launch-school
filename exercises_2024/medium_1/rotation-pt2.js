/* Small Problems - Medium 2: Rotation (Part 2)

Instructions:
- Write a function that rotates the last count digits of a number.
- To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Input:
- Two numbers:
  Argument 1: 

Output:
- A number where the a specified digit is moved to the back

Questions:
Q: What type of number is input?
  A: An integer (assumption based on the test cases)
Q: What digit needs to be moved to the back?
Q: How many digits will the input number have?
  A: Unspecified, but let's assume variable
Q: What to do with the second arguments if its higher than the number of digits in the first argument?
  A: Ignore this edge case for now

Rules:
- The first argument needs to be number (integer)
- The second argument needs to be a number (integer)
  - This number refers to what digit of the input number to move to the back:
    When you take the input number and subtract it from the number of digits, you get the index of the digit to move to the end
- After the specified digit is moved, leave the rest of the digits in the same order

Data:
- Numbers (input)
- Array (processing)
- Number (output)

Algorithm:
Get two numbers: num, count
Turn number into a string
Cut string into two parts:
  Left = From first element to index of -count (to count from the back)
  Right = From index of -count until the end
Turn right string into an array and have its first element moved to the end
Return left string plus the swapped right string, as a number
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

// Test cases
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917