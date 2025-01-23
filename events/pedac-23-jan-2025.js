/* PEDAC with Clare: Difference of Two

Instructions:
- The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
- The result array should be sorted in ascending order of values.
- Assume there are no duplicate numbers in the array.
- The order of the numbers in the input array should not matter.

Input:
- An array of integers

Output:
- A nested array of integers;
  - Every nested array is two elements long
  - Every nested array contains a pair of integers that has exactly a difference of 2

Questions:
Q: Is the input array of odd or even length?
  A: Both
Q: Can an input array be empty?
  A: No, looking at the test cases
Q: Can an output array be empty?
  A: Yes, looking at the test cases


Rules:
- The input array only contains integers
- There are no duplicate numbers in the array
- The resulting array should be sorted in ascending order
- The smallest number should come first in each nested array

Data:
- Array (input)
- Numbers (array elements)
- Nested/two dimensional array (output)

Algorithm:
Get inputArray
Set an empty array: outputArray
Make a copy of inputArray and sort it in ascending order: sortedArray
Iterate over sortedArray from the start to the end:
  Store the current element: currentElement
  Iterate over sortedArray from current element to the end:
  Store the current sub element: currentSubElement
    If currentSubElement is 2 more than than currentElement:
     Add currentElement and currentSubElement to a new subarray and add it to outputArray
    Endif
End iterating over sortedArray and return outputArray

*/

function differenceOfTwo(inputArray) {
  let outputArray = [];
  let sortedArray = inputArray.slice().sort((a, b) => (a - b));

  for (let index = 0; index < sortedArray.length; index++) {
    let currentElement = sortedArray[index];

    for (let subIndex = index; subIndex < sortedArray.length; subIndex++) {
      let currentSubElement = sortedArray[subIndex];

      if (currentSubElement === (currentElement + 2)) {
	outputArray.push([currentElement, currentSubElement]);
      }
    }
    
  }

  return outputArray;
}

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
