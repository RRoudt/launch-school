/* Easy 5.10: Array Average

Instructions:
- Take an array of integers as an input
- Return the average of all the integers in the array
  - Round down to the integer component of the average
- The input array will never be empty
- The numbers will always be positive integers

Input:
- Array of possible ingegersintegers

Output:
- Integer (average of all integers in input array)

Rules:
- Input array will always have at least one element
- Every element in the input array will be a positive integer
- A single integer should be returned
- The returning integer should be rounded down to an integer

Data:
- Array as input
- Integer as output

Algorithm:
- Get an integer of integers: arr
- Create a new variable: total
  - Iterate over arr
    - Add every element to total
- Create a variable average and assign it to:
  total / length of arr
- Round down average and return the value
*/

function average(arr) {
  let total = arr.reduce((total, num) => total + num);
  let average = total / arr.length;
  return Math.floor(average);
}

// Test cases
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40