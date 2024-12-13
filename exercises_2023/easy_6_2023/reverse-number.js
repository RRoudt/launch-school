/* Easy 6.3: Reverse Number

Input:
- Integer

Output:
- Integer, reversed based on input integer

Rules:
- Input is an integer
- Output is an integer
- Leading zero in result must get dropped

Data:
- Integer as input
- Integer as output
- String as intermediate structure
- Array as intermediate structure

Algorithm:
- Get an integer: int
- Turn input integer into string: strInt
- Turn string version of integer into an array: strIntArr
- Reverse strIntArr
- Turn strIntArr into a string
- Return number version of string version of strIntArr
*/

function reverseNumber(int) {
  const strInt = String(int);
  const strIntArr = [...strInt];
  return Number(strIntArr.reverse().join(''));
}

// Test cases
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1