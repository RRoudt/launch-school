/* JS101 Small Problems - Easy 2.12: Always Return Negative

Instructions:
- Write a function that takes a number as an argument.
- If the argument is a positive number, return the negative of that number.
- If the argument is a negative number, return it as-is.

Input:
- A number (negative, zero, or positive)

Output:
- A negative number

Rules:
- If argument is a positive number (including 0) return the negative of that number
- If the argument is a negative number, return the number as-is

Pseudocode:
- Set and get number
- If number is below 0
  - Return number as-is
- Else (aka is number is 0 or above)
  - Return -number
*/

function negative(number) {
  return number < 0 ? number : -number;
}

// Test cases
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0