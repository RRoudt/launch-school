/* Exercise 4: Given a list of numbers, write some code to find and display the largest numeric value in the list. */

let listOne = [1, 6, 3, 2];
let listTwo = [-1, -6, -3, -2];
let listThree = [2, 2];

function max(arr) {
  return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

console.log(max(listOne));   // 
console.log(max(listTwo));   // 
console.log(max(listThree)); // 