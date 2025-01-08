/* List Processing 7: Sum of Sums

Instruction:
- Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
- You may assume that the array always contains at least one number.

Input:
- An array of numbers

Output:
- A number (the sum of each leading subsequence of the input array)

Rules:
- The input array always contains at least one number
- At every iteration, sum up the current element and all precending ones, add this sum to a grand sum

Questions:
Q: What is a "leading subsequence"?
  A: Every iteration, all the numbers from the current iteration plus all the previous numbers are summed up. Then, these sums are summed up:
  [3, 5, 2] -> (3) + (3 + 5) + (3 + 5 + 2) --> 21

Data:
- Array (input)
- Number (processing)
- Number (output)

Algorithm:
Get an array: numArray
Set two empty variables: runningSum, totalSum
Iterate over numArray
  Add current number to runningSum
  Add runningSum to totalSum
End iterating over numArray
Return totalSum
*/

function sumOfSums(numArray) {
  let runningSum = 0;
  let totalSum = 0;

  numArray.forEach(num => {
    runningSum += num;
    totalSum += runningSum;
  });

  return totalSum;
}

// Test cases
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35