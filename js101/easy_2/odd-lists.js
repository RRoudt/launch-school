/* Small Problems — Easy 2.8: Odd Lists

Instruction:
- Write a function that returns an Array that contains every other element of an Array that is passed in as an argument.
- The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Further exploration:
- Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.
- Try to solve this exercise in a different way.

Input:
- Array with zero, one, or multiple elements

Output
- Array with every other element of array that was passed in as an argument

Rules:
- Array can be empty
- Array can contain only one element
- Array can contain multiple elements
- Returned array should contain the values in indexes 0, 2, 4, 6, etc. of the passed in array.

Mental model:
>  [2, 3, 4, 5, 6]
=> [2, 4, 6]

>  [1, 2, 3, 4, 5, 6]
=> [1, 3, 5]

>  ['abc', 'def']
=> ['abc']

>  [123]
=> [123]

>  []
=> []

Steps:
- Get and set an array of elements: arr
- Set an empty array ([]): oddElements
- Loop over arr for length of arr:
  - Add current element of arr to oddElements
  - Add 2 to loop iterator
- When loop finishes, return oddElements
*/

// Original exercise
function oddities(arr) {
  let oddElements = [];

  for (let index = 0; index < arr.length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}

// Further exploration exercise
function eventies(arr) {
  let evenElements = [];
  
  let index = 1;
  while (index < arr.length) {
    evenElements.push(arr[index]);
    index += 2;
  }

  return evenElements;
}

// Oddities test cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Eventies test cases
console.log(eventies([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(eventies([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(eventies(["abc", "def"])); // logs ['def']
console.log(eventies([123])); // logs []
console.log(eventies([])); // logs []