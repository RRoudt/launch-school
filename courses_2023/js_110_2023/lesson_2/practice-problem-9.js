/* Practice Problem 9

Instructions:
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

Input:
- Array with mixed data

Output:
- Array with same elements, but ordered alphabetically or numerally in ascending order

Rules:
- Must return a new array
- Array must have the same elements
- Elements must be ordered in ascending order (small to big)
- Numerical elements must be ordered numerically
- String element must be ordered alphabetically

Data:
- Array as input
- Array as output
- Strings as elements
- Numbers as elements

Algorithm:
- Get an array with subarrays
- Iterate through the input array
  - Iterate through each subarray, checking the data type of each element:
    - If elements are numbers, return a - b
    - Else, return UTF-16 value of a - UTF-16 value of b
*/

function sortArray(arr) {
  return arr.map(subarray => {
    if (typeof subarray[0] === 'number') {
      return subarray.slice().sort((a, b) => a - b);
    } else {
      return subarray.slice().sort();
    }
  })
}

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(sortArray(arr));
// Expected output:
// [['a', 'b', 'c'], [-3, 2, 11], ['black', 'blue', 'green']]

console.log(arr);
// Expected output:
// [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]