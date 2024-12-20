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

for (let counter = 1; counter <= 99; counter += 2) {
  console.log(counter);
}