/* Lesson 3: Practice Problems: Easy 3.1

Instructions:
- Write three different ways to remove all of the elements from the array.

Input:
- Array

Output:
- All elements are removed from input array

Rule:
- Solve the problem in 3 different ways
*/

let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];

numbers1.length = 0;

while (numbers2.length > 0) {
  numbers2.pop();
}

numbers3.splice(0);


//Test cases
console.log(numbers1); // []
console.log(numbers2); // []
console.log(numbers3); // []