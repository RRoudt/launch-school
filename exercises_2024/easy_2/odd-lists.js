/* Easy 2.8: Odd Lists

Instructions:
- Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Input:
- Array

Output:
- New array containing every other element of the input array

Rules:
- Returning array should only contain the elements at the even indexes

Questions:
- Must a new array be returned?
  - Let's assume it must

Data:
- Array (input and output)

Algorithm:
Get array
Set new filteredArray
Iterate over array, starting at 0, incrementing by 2
  Add the current element to filteredArray
Return filteredArray
*/

function oddities(array) {
  let filteredArray = [];

  for (let index = 0; index < array.length; index += 2) {
    filteredArray.push(array[index]);
  }

  return filteredArray;
}

// Test cases
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// Further exploration: Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array. Try to solve this exercise in a different way.

const eventies = array => {
  return array.filter((element, index) => index % 2 === 1);
};

// Test cases
console.log(eventies([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(eventies([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(eventies(["abc", "def"])); // logs ['def']
console.log(eventies([123])); // logs []
console.log(eventies([])); // logs []