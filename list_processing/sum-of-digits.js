/* List Processing 1: Sum Of Digits

Input:
- A positive integer

Output:
- Sum of the digits of the input integer

Rules:
- You can't use a for, while, or do...while loops
- You must use a series of method calls to get the sum

Examples:
23 -> 5
496 -> 19
123456789 -> 45

Data:
- Integer as input
- Integer as output
- String for individual digits
- Array to hold individual digits

Algorithm:
- Get an integer
- Turn integer into a string
- Turn string into an array
- Iterate over the array
  - Add the number version of the current element to a total
  - When done, return the total
*/

function sum(integer) {
  return integer.toString()
    .split('')
    .reduce((sum, num) => sum + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45