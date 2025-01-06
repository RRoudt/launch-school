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

Questions:
Q: When are parentheses balanced?
  A: When there are no overlapping opening and closing parentheses, or when the opening and closing parentheses are swapped

Data:
- String (input)
- Arrays (processing)
- Boolean (output)

Algorithm:
Get a string: inputString
Set an empty (0) number variable: numParentheses
Iterate over inputString:
  If current character === '(':
    Increment numParentheses by 1
  Else if current character === ')':
    Decrement numParentheses by 1
  Endif
  If numParentheses < 0:
    Return false
  Endif
Return true if numParentheses === 0
*/



function isBalanced(inputString) {
  let numParentheses = 0;

  for (let char of inputString) {
    if (char === '(') {
      numParentheses += 1;
    } else if (char === ')') {
      numParentheses -= 1;
    }

    if (numParentheses < 0) return false;
  }

  return numParentheses === 0;

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