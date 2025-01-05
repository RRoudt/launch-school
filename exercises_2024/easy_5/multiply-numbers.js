/* Easy 5.7: Multiply Numbers

Instructions:
- Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index.
- You may assume that the arguments contain the same number of elements.

Input:
- Two arrays

Output:
- One array where every element is the result of a multiplication

Rules:
- Accept two arrays as input
- Input arrays only contain numbers
- Input arrays are of the same length
- Return a (one) new array
- New array elements are result of multiplying the values at the same indexes in both input arrays

Data:
- Arrays (input)
- Numbers (array elements, need to be multiplied)
- Array (output)

Algorithm:
Get input arrays: inputArray1, inputArray2
Set a new empty array: outputArray
Iterate over inputArray1:
  Multiply the element at the current index in inputArray1 with the element at the current index in inputArray2
  Add the result of the multiplication to outputArray
Enditerate
Return outputArray
*/

function multiplyList(inputArray1, inputArray2) {
  let outputArray = [];

  inputArray1.forEach((_, index) => {
    outputArray.push(inputArray1[index] * inputArray2[index]);
  });

  return outputArray;
}

// Test case
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]