/* eslint-disable max-len */
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

// console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                       ^-----^         4 + 2 = 6, indices: 0, 2
//                          ^-----^      3 + 3 = 6, indices: 1, 3
//                             ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

/*
Problem
Inputs:
- Array of integers
- An integer

Output:
- An array
  - The two elements that together create the sum (the second argument)

Questions:
- Q: Do the elements have to be in order to create the sum?
  - A: No, the first two elements that together are exactly the same as the second argument are the ones that need to be returned in an array

Example
console.log(sumPairs([4, 3, 2, 3, 4],         6));
Should return: [4, 2]

Data
Inputs:
- An array of integers
- An integer signifying the sum

Output:
- An array with the elements that together equal the sum (the second argument)

Algorithm
- Get an array of integers (parameter): inputArr
- Get integer: targetInt
- Set empty array: targetArr
- Iterate over the inputArr
  - Check if adding the current element to the targetArr exceeds the targetInt
  - If the current element is higher than the targetInt, ignore the element
  - If the current element is lower than the targetInt, add the element to targetArr
  - Check if total of targetArr is equal to targetInt, return targetArr
*/

function sumPairs(inputArr, targetInt) {
  let targetArr = [];

  for (let index = 0; index < inputArr.length; index++) {
    if (inputArr[index] > targetInt) continue;
    if 
  }

}

//Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]