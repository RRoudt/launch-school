/* Solution to exercise 9: check if array has number 3 

Challenge:
- Don't use a for, while or do/while loop
- Check whether the number 3 appears in the array
*/

const threeAppears = arr => arr.includes(3);

let numbers1 = [1, 3, 5, 7, 9, 11]; 
let numbers2 = [];                  
let numbers3 = [2, 4, 6, 8];        

console.log(threeAppears(numbers1)); // true
console.log(threeAppears(numbers2)); // false
console.log(threeAppears(numbers3)); // false