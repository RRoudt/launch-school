/* Easy 2.7: Exclusive Or

Instructions:
- write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.
- Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Input:
- Truthy or falsy arguments (two in total)

Output:
- Boolean (true or false)

Rules:
- Return true if only one of the input values is truthy
- Return false is both or none of the input values is truthy

Questions:
-

Data:
- Expressions (input)
- Boolean (output)

Algorithm:
Get exp1
Get exp2
If exp1 is truthy and exp2 is falsy OR exp1 is falsy and exp2 is truthy
  Return true
Else:
  Return false
Endif
*/

function xor(exp1, exp2) {
  if ((exp1 && !exp2) || (!exp1 && exp2)) {
    return true;
  }

  return false;
}

// Test cases
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true