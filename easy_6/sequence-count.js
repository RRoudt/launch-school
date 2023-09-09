/* Easy 6.6: Sequence Count

Input:
- Two integers
  - First argument is a counter: count
  - Second integer is the starting number of sequence: seqStart

Output:
- Array with number of elements as the `count` argument
  - Every element is a miltiple of seqStart
  (This means: the last element's value plus seqStart)

Rules:
- Every element in returning array should be a multiple of seqStart
- count will always be an integer of 0 or more
- seqStart can be any integer (positive or negative)
- If count is 0, return an empty array (guard clause)

Data:
- Integers as inputs
- Integer to hold the current value
- Array as output

Algorithm:
- Get counter value: count
- Get starting value: seqStart
- Set empty integer: currentValue
- Set empty array: seqCount
- If count is 0
  - Return seqCount (which is an empty array)
- Start a loop, iterating for `count` amount of times
  - Add seqStart to currentValue
  - Push currentValue to seqCount
- Return seqCount
*/

function sequence(count, seqStart) {
  let currentValue = 0;
  let seqCount = [];

  // If count is 0, return an empty array
  if (count === 0) return seqCount;

  for (;count > 0; count--) {
    currentValue += seqStart;
    seqCount.push(currentValue);
  }

  return seqCount;
}

// Test cases
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []