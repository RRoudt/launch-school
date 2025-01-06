/* Easy 6.10: Matching Parentheses?

Instructions:
- Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise.
- To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input:
- A string containing parentheses

Output:
- A boolean
  - True if parentheses are balanced
  - False if parentheses aren't balanced

Rules:
- 

Questions:
Q: When are parentheses balanced?
  A: When there are no overlapping opening and closing parentheses, or when the opening and closing parentheses are swapped

Data:
- String (input)
- Arrays (processing)
- Boolean (output)

Algorithm:
Get a string: inputString
Set an empty array: parenthesesArray
Iterate over inputString:
  If current character is '(' or ')':
    Add current character to parenthesesArray
  Endif
Enditerate
If parenthesesArray is of uneven length:
  Return false
Else if parenthesesArray is of length 2:
  If the first element of parenthesesArray is not '(' and the second element of parenthesesArray is not ')':
    Retur nfalse
Else:
  Set a variable to parenthesesArray.length / 2: middleIndex
  Split parenthesesArray into to halves:
    parenthesesSubArray1 = first element until middleIndex
    parenthesesSubArray2 = middleIndex until end, then this array reversed
  Iterate over parenthesesSubArray1:
    If the element with the current index is not the same as the element with the current index in parenthesesSubArray2:
      Return false
Endif
Return true
*/

function getParenthesesArray(string) {
  let parenthesesArray = [];

  for (let char of string) {
    if (char === '(' || char === ')') {
      parenthesesArray.push(char);
    }
  }

  return parenthesesArray;
}

function isBalanced(inputString) {
  let parenthesesArray = getParenthesesArray(inputString);

  if (parenthesesArray.length % 2 === 1) {
    return false;
  } else if (parenthesesArray.length === 2) {
    if (parenthesesArray[0] !== '(' && parenthesesArray[1] !== ')') return false;
  } else {
    const middleIndex = parenthesesArray.length / 2;
    let parenthesesSubArray1 = parenthesesArray.slice(0, middleIndex);
    let parenthesesSubArray2 = parenthesesArray.slice(middleIndex).reverse();

    for (let index = 0; index < parenthesesSubArray1.length; index += 1) {
      if (parenthesesSubArray1[index] === parenthesesSubArray2[index]) {
        return false;
      }
    }
  }

  return true;

}


// Test cases
console.log(isBalanced("What (is) this?"));
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);