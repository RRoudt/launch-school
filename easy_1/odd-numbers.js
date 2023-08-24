/* Exercise 2: Odd Numbers

Challenge:
- Log all odd numbers from 1 to 99, inclusive, to the console
- Each number must be on a separate line.

Input:
- None

Output:
- Console log, from 1 to 99 (inclusive)

Mental model:
SET iterator = 1
WHILE iterator <= 99
  PRINT iterator
  iterator += 2

*/

// Original solution:
/* for (let index = 1; index <= 99; index += 2) {
  console.log(index);
} */

/* Further Exploration:
- Repeat this exercise with a different technique.
- Add a way for the user to specify the limits of the odd numbers. */

function logOddNumbers(startNum, endNum) {
  if (!startNum || !endNum) return "Usage: logOddNumbers(startNum, endNum)";
  if (startNum % 2 === 0) return "Give an odd starting number";

  let currentNum = startNum;

  while (currentNum <= endNum) {
    console.log(currentNum);
    currentNum += 2;
  }
  return "Here are your odd numbers!";
}

console.log(logOddNumbers(1, 99));