/* Solution to exercise 7 of Array chapter 

Challenge:
- Use reduce() to compute the sum of the squares of all the numbers in an array */

function sumOfSquares(arr) {
  return arr.reduce((sum, number) => sum + (number * number), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83