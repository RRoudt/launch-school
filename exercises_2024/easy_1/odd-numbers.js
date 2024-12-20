/* Easy 1.2: Odd Numbers 

Instructions:
- Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Input:
- None

Output:
- Odd numbers, from 1 to 99, logged to the console

Rules:
- Only odd numbers must be logged to the console
- Numbers must be logged on a separate line

Algorithm:
+ Start a loop
  + Set the counter to one
  + Stop looping at 99
  + Increase the counter by 2 every iteration
  + Log the current counter value
*/

// for (let counter = 1; counter <= 99; counter += 2) {
//   console.log(counter);
// }

/* Further exploration
Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

let numbers = [...Array(100).keys()];

numbers.forEach(num => {
  if (num % 2 === 1) console.log(num);
});