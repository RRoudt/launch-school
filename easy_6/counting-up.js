/* Easy 6.4: Counting Up

Input:
- Integer

Output:
- Array with integers from 1 to the argument (inclusive)

Rules:
- Argument is always a positive integer
- The argument must be in the resulting array

Data:
- Integer as input
- Array as output

Algorithm:
- Get an integer: target
- Set an empty array: outputArr
- Run a loop from 1 to the argument (inclusive)
  - Add every counter value to the outputArr
- Return outputArr
*/

function sequence(target) {
  let outputArr = [];
  for (let count = 1; count <= target; count++) {
    outputArr.push(count);
  }
  return outputArr;
}

// Test cases
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]