/* Easy 5.5: Combine Two Lists

Instructions:
- Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.
- You may assume that both input arrays are non-empty, and that they have the same number of elements.

Input:
- Two arrays

Output:
- One array, made of the elements of the two input arrays

Rules:
- The output arrays needs to alternately take elements from the input arrays:
  el1arr1, el1arr2, el2,arr1, el2,arr2, etc.
- The input arrays always contain at least one element each
- The input arrays are always of equal length

Questions:
Q: What array should be picked from first?
  A: Array1, it seems from the test case

Data:
- Array (input)
- Numbers and strings (array elements)
- Array (output)

Algorithm:
Get two arrays: inputArray1, inputArray2
Set a new empty array: outputArray
Iterate over inputArray1:
  Add the element at the current index in inputArray1 to outputArray
  Add the element at the current index in inputArray2 to outputArray
Enditerate
Return outputArray
*/

function interleave(inputArray1, inputArray2) {
  let outputArray = [];

  inputArray1.forEach((element, index) => {
    outputArray.push(element, inputArray2[index]);
  });

  return outputArray;
}


// Test case
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]