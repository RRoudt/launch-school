/* JS110 - Lesson 1.9: Selection and Transformation - Multiply

Instructions:
- Write a function that multiplies the elements of the array by an arbitrary number. 
  For instance:
    let myNumbers = [1, 4, 3, 7, 2, 6];
    multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
- Try coding a function that lets you multiply every array item by a specified value.
- As with doubleNumbers, don't mutate the array, but return a new array instead.

Input:
- An array
- A number (multiplier)

Output:
- A new array where every element is multiplied by the multiplier

Rules:
- Every element in the output array must be the product of the element from the input array multiplied by the input multiplier
- Return a new array

Data:
- Array (input)
- Numbers (array elements)
- Array (output)

Algorithm:
Get an array of numbers: inputArray
Get a number: multiplier
Iterate over inputArray
  Multiply the current element with the inputted multiplier
  Store the product to a new array
End iterating over inputArray
Return the new array
*/

function multiply(inputArray, multiplier) {
  return inputArray.map(num => num * multiplier);
}

// Test case
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]