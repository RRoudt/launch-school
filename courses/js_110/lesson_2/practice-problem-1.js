/* JS110 - Lesson 2.5: Practice Problem 1

Instructions:
- How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
  ['10', '11', '9', '7', '8']

Input:
- Array of string versions of numbers

Output:
- Array of string versions of numbers, sorted in descending order

Questions:
Q: Should the same array get returned?
  A: Let's assume: yes

Rules:
- Output a new array with string versions of numbers
- Array should be ordered by the numeric value of the strings

Data:
- Array (input)
- Strings (array elements)
- Numbers (strings when coerced to numbers)
- Array (output)

Algorithm:
Iterate over the array
  Compare the numeric versions of the current (b) and next (a) element:
    If b is less than a:
      Put b before a
    Else if a is less than b:
      Put a before b
    Else:
      Leave a and be in their current positions
End iterating over the array and return it
*/

function sortArray(array) {
  return array.sort((a, b) => Number(b) - Number(a));
}

// Test case
let arr = ['10', '11', '9', '7', '8']; 
console.log(sortArray(arr));
// => [ '11', '10', '9', '8', '7' ]