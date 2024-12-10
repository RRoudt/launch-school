/* eslint-disable max-len */
/* Easy 5.3: Halvsies

Instructions:
- Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array.
- Put the first half of the original array elements in the first element of the return value, and put the second half in the second element.
- If the original array contains an odd number of elements, place the middle element in the first half array.

Input:
- Array

Output:
- Array with two subarrays

Rules:
- Input array can be odd or even number in length
- When input array is uneven in length, but the middle element in the first subarray
- When only one element is in the array, return the second array as empty
- When an empty array is passed as argument, return two empty arrays

Data:
- One array as input
- Two arrays as output

Algorithm:
- Get an array
- Check array length
  - If 0, return: [[], []]
  - If 1, return [input array, []]
- Create empty array: subArr1
- Create another empty array: subArr2
- Get middle index from input array: array length / 2, rounded up: middleIndex
- Run a loop to populate subArr1, until the middle index of the input array
  - Add the current element to subArr1
- Run a loop to populate subArr2, from the middle index until the end of the input array
  - Add the current element to subArr2
- Return a new array, with subArr1 at the first index, and subArr2 at the second index
*/

function halvsies(arr) {
  if (arr.length === 0) return [[], []];
  if (arr.length === 1) return [arr, []];

  let subArr1 = [];
  let subArr2 = [];
  const middleIndex = Math.ceil(arr.length / 2);

  // Populate subArr 1
  for (let index = 0; index < middleIndex; index++) {
    subArr1.push(arr[index]);
  }

  // Populate subArr 2
  for (let index = middleIndex; index < arr.length; index++) {
    subArr2.push(arr[index]);
  }

  return [subArr1, subArr2];
}

// Test cases
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]