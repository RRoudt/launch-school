/* Small Problems - Medium 1: Rotation (Part 1)

Instructions:
- Write a function that rotates an array by moving the first element to the end of the array.
  -Do not modify the original array.
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

Input:
- An array

Output:
- A new array based on the input array, but the first element is moved to the back

Rules:
- Do not mutate the input array
- If the input is not an array, return undefined
- If the input is an empty array, return an empty array

Data:
- Array (input)
- Array (output)

Algorithm:
Get an input
If input is not an array, return undefined
If input is an array of length 0, return a new empty array
Copy the array
Move the first element to the back of the copied array
Return the array
*/

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) return undefined;
  if (inputArr.length === 0) return [];

  let copiedArr = inputArr.slice();
  copiedArr.push(copiedArr.shift());

  return copiedArr;
}

// Test cases
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]