/* Easy 6.6: Sequence Count

Instructions:
- Create a function that takes two integers as arguments.
  - The first argument is a count, and the second is the starting number of a sequence that your function will create.
- The function should return an array containing the same number of elements as the count argument.
  - The value of each element should be a multiple of the starting number.
- You may assume that the count argument will always be an integer greater than or equal to 0.
- The starting number can be any integer.
- If the count is 0, the function should return an empty array.

Input:
- Two integers
  - First: count
  - Second: starting number of a sequence

Output:
- An array, with count number of elements, each element being a multiple of the starting number

Rules:
- Count will always be 0 or greater
- The starting number can be any integer
- If count is 0, return an empty array
- The elements should be a multiple of the starting number, like this:
  3, 5 -> [5, 10, 15]
  - In essence, the array contains a running count of the sum, leading up to count * starting number

Data:
- Numbers (input)
- Numbers (array elements, processing)
- Array (output)

Algorithm:
Get two integers: count, startingNum
Set an empty array: outputArray
Start a loop for count times (inclusive), starting at 1:
  Add the result of current loop * startingNum as a new element to outputArray
Endloop
Return outputArray
*/

function sequence(count, startingNum) {
  let outputArray = [];

  for (let currentCount = 1; currentCount <= count; currentCount += 1) {
    outputArray.push(currentCount * startingNum);
  }

  return outputArray;
}

// Test cases
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []