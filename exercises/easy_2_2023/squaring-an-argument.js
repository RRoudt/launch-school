/* Easy 2.4: Squaring an Argument

Input:
- Number

Output:
- Number multiplied by number (aka squared)

Pseudocode:
GET number
RETURN output of call to multiply() with number variable
*/

const multiply = (number1, number2) => number1 * number2;

const square = (number) => multiply(number, number);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true