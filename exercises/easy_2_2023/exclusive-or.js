/* Easy 2.7: Exclusive Or

Input:
- Two arguments of any data type

Output:
- True if exactly one of its arguments is truthy, false otherwise

Steps:
- Get argument1
- Get argument2
- If argument1 is truthy and argument2 is falsy
  - Return true
- Else if argument1 is falsy and argument2 is truthy
  - Return true
- Else
  -Return false
*/

function xor(argument1, argument2) {
  return !!(argument1 && !argument2) || (!argument1 && argument2);
}

// Test cases
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true