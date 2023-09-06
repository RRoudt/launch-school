/* Easy 5.6: Multiplicative Average

Instructions:
- Write a function that takes an array of integers as input
- Multiply all of the integers together
- Divide the result by the number of entries in the array
- Return the result as a string with the value rounded to three decimal places

Input:
- Array of integers

Output:
- String of result, rounded to three decimal places

Rules:
- All numbers in array must be multiplied
- Result of multiplication must be divided by number of array element
- Result of that division must be returned as string, rounded to three decimals

Questions:
-

Mental model:
Case 1
- Input: [3, 5]
- Output: "7.500"
- Steps:
  - 3 * 5 = 15
  - 15 / 2 = 7.500

Case 2
- Input: [2, 5, 7, 11, 13, 17]
- Output: "28361.667"
- Steps:
  - 2 * 5 * 7 * 11 * 13 * 17 = 170170
  - 170170 / 6 = 28361.667

Data:
- Array as input
- Integers as elements
- Decimal number after division
- String as return value (rounded to 3 decimal places)

Algorithm:
- Get array of integers: arr
- Set a new variable to 1: totalOfArr
- Iterate over arr
  - Set totalOfArr to: totalOfArr * current element
- Set averageOfTotalOfArr: totalOfArr / length of arr
- Return averageOfTotalOfArr as string, rounded to three decimals places
*/

function multiplicativeAverage(arr) {
  let totalOfArr = 1;

  for (let num of arr) {
    totalOfArr *= num;
  }

  let averageOfTotalOfArr = totalOfArr / arr.length;
  return averageOfTotalOfArr.toFixed(3).toString();
}

// Test cases
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"