/* Easy 1.3: Even Numbers 

Instructions:
- Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Output:
- Even numbers, from 1 to 99, logged to the console

Rules:
- Only even numbers must be logged to the console
- Numbers must be logged on a separate line

Algorithm:
+ Start a loop
  + Set the counter to 1
  + Stop looping at 99
  + Increase the counter by 1 every iteration
  + If module of number by 2 is 1, skip to next iteration
  + Log the current counter value
*/

for (let number = 1; number < 99; number += 1) {
  if (number % 2 === 1) continue;
  
  console.log(number);
}