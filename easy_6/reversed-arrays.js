/* eslint-disable max-len */
/* Easy 6.9: Reversed Arrays

Input:
- Array

Output:
- Same array, but reversed

Rules:
- The input array gets mutated
- The same array object must be returned
- I can't use the built-in reverse() method
- Input arrays with one or none element get returned as-is

Examples:
In:  [1, 2, 3, 4]
Out: [4, 3, 2, 1]
In:  ["a", "b", "c", "d", "e"]
Out: ["e", "d", "c", "b", "a"]
In:  ["abc"]
Out: ["abc"]
In:  []
Out: []

Data:
- Array as input
- Same array as output, reversed
- Array as intermediate storage

Algorithm:
- Get input array: inputArr
- Set empty array: interArr
- Check if inputArr is of length 0 or 1
  - If yes, return inputArr as-is
- Iterate over inputArr, starting at the last element to the first
  - Add every element to interArr
- Iterate over interArr
  - Set the element of the current index of inputArr to the current element of interArr
- Return inputArr
*/

function reverse(inputArr) {
  let interArr = [];
  if (inputArr.length <= 1) return inputArr;

  for (let index = inputArr.length - 1; index >= 0; index--) {
    interArr.push(inputArr[index]);
  }

  for (let index = 0; index < interArr.length; index++) {
    inputArr[index] = interArr[index];
  }

  return inputArr;
}

// Test cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true