/* JS110 - Lesson 2.5: Practice Problem 17

Instructions:
- Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

Input:
- An array with objects for elements

Output:
- An array containing only the objects where all the numbers it contains are even

Questions:
Q: Should the same or a new array be returned? (i.e. does the input array get mutated?)
  A: Return a new array, don't mutate the input array (assumption)

Rules:
- Only include an object if ALL numbers it contains are even
- The input array contains objects for elements
- Each nested object contains one or more key-value pairs
  - Each value is one array, made up of one up more numbers

Data:
- Array (input)
- Objects (nested, input array elements)
- Arrays (object values)
- Integers (subarray values)

Algorithm:
Get an array and iterate over it to filter it:
  If numbers in current object are all even:
    Add object to new array
  Endif
End iterating over the array and return the filtered array

Check if numbers in object are all even:
  Get an object
  Turn the object values into an array
  Flatten the array so it's easier to iterate
  If every num % 2 === 0:
    Return true
  Else:
    Return false
  Endif
*/

function areAllEven(obj) {
  return Object
    .values(obj)
    .flat()
    .every(num => num % 2 === 0);
}

function filterOnEvenSum(arr) {
  return arr.filter(obj => {
    return areAllEven(obj);
  })
}

// Test case
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(filterOnEvenSum(arr));
[
  { e: [8], f: [6, 10] }
];