/* Small Problems Exercises: Easy 3.7: Double Doubles

Instructions:
- Write a function that takes a number
- Return the number provided as argument, multiplied by two, unless:
  - The argument is a double number. In the case, return as-is

Inputs:
- Number (integer)

Outputs:
- Inputted number times two if inputted number is not a double number
- Inputted number as-is if inputted number is a double number

Rules:
- A double number is an even-length number
- A double number's left side digits are the same as the right side digits

Examples of double numbers:
- 44
- 3333
- 103103
- 7676

Pseudocode:
- Set and get: num
- Turn number into a string: numStr
- If (numStr.length % 2 === 0)
  - Set numStrHalf1: numStr index 0 until (length of numStr / 2)
  - Set numStrHalf2: numStr index of (length of numStr / 2) until end
  - If (numStrHalf1 === numStrHalf2)):
    - Return num
  - Else:
- Else:
  - Return num * 2
*/

function twice(num) {
  const numStr = num.toString();

  // First check whether numer is even-length
  if (numStr.length % 2 === 0) {
    // Now it's save to cut up the number in two halves
    const numStrHalf1 = numStr.slice(0, numStr.length / 2);
    const numStrHalf2 = numStr.slice(numStr.length / 2);

    // Return number as-is if two halves are the same
    if (numStrHalf1 === numStrHalf2) return num;

    // Two halves are not the same, so return input number times 2
    return num * 2;

  } else {
    // Number is uneven, so return input number times 2
    return num * 2;
  }
}

// Test cases
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676