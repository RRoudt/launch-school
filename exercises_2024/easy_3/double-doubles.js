/* Easy 3.7: Double Doubles

Instructions:
- Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.
- A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Input:
- Number

Output:
- Number

Rules:
- Return the number as-is when the left-side digits are exactly the same as the right-side digits
  - For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
- Return the number multiplied by two if the number is not a double number

Questions:
-

Data:
- Number (input and output)
- String (for processing)

Algorithm:
Get num
Turn num into a string: numString
If left half of numString is the same as the right half of numString:
  Return num as-is
Else:
  Return num * 2
Endif
*/

function twice(num) {
  let numString = String(num);
  let centerIndex = Math.floor(numString.length / 2);
  let leftHalf = numString.slice(0, centerIndex);
  let rightHalf = numString.slice(centerIndex);

  if (leftHalf === rightHalf) {
    return num;
  }

  return num * 2;
}

// Test cases
console.log(twice(37) === 74);          // true
console.log(twice(44) === 44);          // true
console.log(twice(334433) === 668866);  // true
console.log(twice(444) === 888);        // true
console.log(twice(107) === 214);        // true
console.log(twice(103103) === 103103);  // true
console.log(twice(3333) === 3333);      // true
console.log(twice(7676) === 7676);      // true