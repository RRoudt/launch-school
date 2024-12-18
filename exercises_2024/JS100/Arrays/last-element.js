/* JS100 - Arrays - 2. Last Element

Instructions:
+ Write a function that returns the last element of an input array. 

Input:
+ Array

Output:
+ Last element of input array

Data:
+ Array
*/

function last(arr) {
  return arr[arr.length -1];
}

// Test case
console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'