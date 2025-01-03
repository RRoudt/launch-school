/* Easy 1.10: Multiples of 3 and 5

Instructions:
- Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
- You may assume that the number passed in is an integer greater than 1.

Input:
- A number

Output:
- Sum of all numbers that are either multiples of 3 or 5

Rules:
- Compute sum of number between 1 and inputted argument
  - Include inputted argument in sum if it conforms to the rule below
- Only count a number if it can be evenly divided by 3 or 5

Data:
- Number (input)
- Number (output)

Algorithm:
+ Get number
+ Set sum to 0
+ Iterate from 1 to inputted number
  + If current number can be evenly divided by 3 or 5, add it to sum
+ Return sum
*/

function multisum(targetNum) {
  let sum = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168