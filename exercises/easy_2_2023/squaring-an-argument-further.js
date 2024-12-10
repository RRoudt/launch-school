/* Further exploration of Easy 2.4: Squaring an Argument

What if we wanted generalize this function to a "power to the n" type function.

How would we go about doing so while still using the multiply() function?

Input:
- Number
- Power

Output:
- Number multiplied by number (aka squared)

Pseudocode:
GET number
GET power
SET sum = number
SET iteration = 1
WHILE iteration < power
  sum = sum * number
RETURN output of call to multiply() with number variable
*/

const multiply = (number1, number2) => number1 * number2;

const toThePower = (number, power) => {
  let sum = number;

  for (let iteration = 1; iteration < power; iteration += 1) {
    sum = multiply(sum, number);
  }

  return sum;
};

console.log(toThePower(5, 2)); // 25
console.log(toThePower(5, 3)); // 125
console.log(toThePower(8, 5)); // 32768