/* Easy 5.5: Combine Two Lists

Instructions:
- Combine two arrays passed as arguments
- Return a new array that contains all the elements from the input arrays
- The elements from the two arrays should be interleaved

Input:
- Two arrays

Output:
- One new array

Rules:
- The resulting array must be a new array
- The elements of the arrays must be interleaved
  - The new array should start with the first element of the first array
- Both input arrays will be non-empty
- Both input arrays will have the same amount of elements

Mental model:
- First the first element of the first array
- Second the first element of the second array
- Third the second element of the first array
- Fourth the second element of the second array
- Fifth the third element of the first array
- Sixth the third element of the first array

Data:
- Two arrays as input
- One new array as output
- Primitives as elements

Algorithm:
- Get two arrays: arr1, arr2
- Create a new empty array: interleavedArr
- Iterate over arr1
  - Add the element at the current index of arr1 to interleavedArr
  - Add the element at the current index of arr2 to interleavedArr
- Return interleavedArr
*/

function interleave(arr1, arr2) {
  let interleavedArr = [];

  arr1.forEach((element, index) => {
    interleavedArr.push(element, arr2[index]);
  });

  return interleavedArr;
}

// Test case
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]