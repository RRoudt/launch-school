/* eslint-disable max-len */
/* Easy 5.7: Multiply Lists

Instructions:
- Write a function that takes two arrays of numbers
- Return a new array with the produce of each pair of argument of the same index
- Assume that the input arrays are of the same length

Input:
- Two arrays with numbers

Output:
- New array with every element multiplied by the same index element from the other array

Rules:
- Input arrays always contain number
- Input array are always of the same length
- Output array must be of the same length as the individual arrays

Questions:
-

Mental model:
- Input: [3, 5, 7], [9, 10, 11]
- Output: [27, 50, 77]
- Steps:
  - 3 * 9 = 27
  - 5 * 10 = 50
  - 7 * 11 = 77

Data:
- Two arrays as input
- One new array as output
- Numbers as elements

Algorithm:
- Get two arrays as input: arr1, arr2
- Create a new empty array: productArr
- Iterate over arr1
  - Multiply the current element with the element at the same index in arr
  - Add the multiplied number to productArr
- Return productArr
*/

function multiplyList(arr1, arr2) {
  let productArr = [];

  arr1.forEach((element, index) => {
    let product = element * arr2[index];
    productArr.push(product);
  });

  return productArr;
}

// Test case
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]