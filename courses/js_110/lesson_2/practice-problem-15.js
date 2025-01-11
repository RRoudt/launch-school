/* JS110 - Lesson 2.5: Practice Problem 15

Instructions:
- Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

Input:
- Two-dimensional array with integers

Output:
- Sorted two-dimensional array with integers
  - Sorting happens on basis of the sum of the odd numbers in each subarray

Questions:
Q: Should the input array be mutated?
  A: Yes, let's assume
Q: Should the input array be returned?
  A: Yes, let's assume
Q: Should the array be ordered ascending or descending?
  A: Ascending, looking at the test case

Rules:
- Input array is two-dimensional
- Output array should be the same as the input array, but sorted
  - Sorting should happen on the basis of the sum of the odd numbers in the subarrays
- Only sort the subarrays; not their elements

Data:
- Array (nested, input)
- Subarrays (elements of array)
- Integers (elements of subarrays)
- Array (output)

Algorithm:
Get an array and sort it:
  Get the sum of the odd numbers of a and b: oddNumSumA, oddNumSumB:
    Iterate over the array
    Sum up all the odd numbers in the array
    Return the sum
  If oddNumSumA is lower than oddNumSumB:
    Return a negative number
  If oddNumSumB is lower than oddNumSumB:
    Return a positive number
  Else:
    Return 0
  Endif
Return the sorted array
*/

function getSumOfOddNum(arr) {
  return arr.reduce((sum, num) => num % 2 === 1 ? sum += num : sum, 0);
}

function sortOddSum(arr) {
  return arr.sort((a, b) => {
    let oddNumSumA = getSumOfOddNum(a);
    let oddNumSumB = getSumOfOddNum(b);

    return oddNumSumA - oddNumSumB;
  });  
}

// Test case
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(sortOddSum(arr));
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]