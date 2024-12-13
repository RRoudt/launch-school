/* Lesson 1.9: Double odd indices

Instructions:
- Code a solution that doubles the numbers that have odd indicies

Inputs:
- Array with numbers

Outputs:
- Array with same amount of numbers

Rules:
- When index number is odd, double the number at the current element
- The function should return a new array (not mutate the passed-in array)
- The same amount of elements needs to be returned that were passed-in

Data:
- Both the input and the output are arrays

Algorithm:
- Create a new empty array
- Loop through passed-in array
  - If the remainder of dividing the current index by 2 is 1, multiply number 2 before adding it to the new array
  - Else, add the number as-is to the new array
- When the loop finishes, return the new array
*/

function doubleOddIndices(numbers) {
  let transformedNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];
    
    if (index % 2 === 1) {
      transformedNumbers.push(currentNumber * 2);
    } else {
      transformedNumbers.push(currentNumber);
    }
  }

  return transformedNumbers;
}

// Test case
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]