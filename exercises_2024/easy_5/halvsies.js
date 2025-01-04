/* Easy 5.3: Halvsies

Instructions:
- Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array.
Put the first half of the original array elements in the first element of the return value, and put the second half in the second element.
- If the original array contains an odd number of elements, place the middle element in the first half array.

Input:
- One array

Output:
- Two subarrays nexted within one array; the input array split into the two subarrays

Rules:
- Take one array as an input
- Return an array that contains two subarrays
- The first subarray contains the first half of the elements of the input array
- The second subarray contains the second half of the elements of the input array
- If the input array has an odd number of elements, place the middle element in the first half array 

Questions:
Q: Should a new array be returned?
  A: Yes, let's assume so

Data:
- Array (input)
- Number (array elements)
- Array with two subarrays (output)

Algorithm:
Get an array: inputArray
Set a number variable containing inputArray.length / 2, rounded up: middleIndex
Set a new array containing the elements of inputArray from index 0 to middleIndex: subArray1
Set a new array containing the elements of inputArray from middleIndex to the end: subArray2
Return a new array containing subArray1 and subArray2
*/

function halvsies(inputArray) {
  let middleIndex = Math.ceil(inputArray.length / 2);

  let subArray1 = inputArray.slice(0, middleIndex);
  let subArray2 = inputArray.slice(middleIndex);
  
  return [subArray1, subArray2];
}


// Test cases
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]