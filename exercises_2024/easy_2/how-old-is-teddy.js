/* Easy 2.9: How Old is Teddy?

Instructions:
- Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Input:
- Nothing

Output:
- String: `Teddy is xx years old!`

Rules:
- Generate a number between 20 and 120 (inclusive)

Questions:
-

Data:
- Number (randomly generated)
- String containing the number

Algorithm:
Get a min and max value
Generate a random number
Multiply the random number by the maximum age + 1
Add 20 to the random number
Round down the random number
Return the random number
Display a string containing the random number: `Teddy is xx years old!`
*/

function randomBetween(min, max) {
  if (min > max) {
    let minSwap = min;
    let maxSwap = max;
    min = maxSwap;
    max = minSwap;
  }

  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

let randomAge = randomBetween(120, 20);
console.log(`Teddy is ${randomAge} years old!`);