/* List Processing 3: Multiply All Pairs

Instructions:
- Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays.
- The returned array should be sorted in ascending numerical order.
- You may assume that neither argument will be an empty array.

Input:
- Two arrays

Output:
- One array

Rules:
- Input arrays contain numbers
- Output array is result of multiplying numbers from arrays with each other

Questions:
Q: What numbers must be multiplied by which?
  A: Let's assume each number from the first array needs to be multiplied by each number from the second array

Data:
- Arrays (inputs)
- Numbers (elements and processing)
- Array (output)

Algorithm:
Get two arrays of numbers: numArr1, numArr2
Set a new empty array to keep all multiplied values: outputArr
Iterate over numArr1:
  Iterate over numArr2:
    Multiply current element of numArr1 by current element of numArr2
    Store product as a new element in outputArr
  End iterating over numArr2
End iterating over numArr1
Return outputArr, sorted ascending
*/

function multiplyAllPairs(numArr1, numArr2) {
  let outputArr = [];

  numArr1.forEach(num1 => {
    numArr2.forEach(num2 => {
      outputArr.push(num1 * num2);
    });
  });

  return outputArr.sort((a, b) => a - b);
}

// Test case
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]