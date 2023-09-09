/* Easy 6.10: Matching Parentheses?

Input:
- A string with opening and closing parentheses

Output:
- True if all pareneses are properly balanced
- False if the parentheses as not properly balanced

Rules:
- Properly balanced = parentheses must occur in match ( and ) pairs

Examples:
"What (is) this?"    === true
"What is) this?"     === false
"What (is this?"     === false
((What) (is this))?  === true
((What)) (is this))? === false
Hey!                 === true
)Hey!(               === false
What ((is))) up(     === false

Data:
- Input as string
- Boolean as output
- Array as intermediate structure

Algorithm:
- Get an input string: inputStr
- Set empty array: parensArr
- Turn inputStr into an array: strArr
- Iterate through strArr
  - If character is opening parenthesis:
    - Push character to parensArr
  - If character is closing parenthesis:
    - If parensArr is length 0, return false
    - If last element of parensArr is opening parenthesis:
      - Remove last element of parensArr
    - Else, return false
- If length of parensArr is 0, return true, otherwise false
*/

function isBalanced(inputStr) {
  let parensArr = [];
  const strArr = [...inputStr];

  for (let char of strArr) {
    if (char === '(') {
      parensArr.push(char);
    } else if (char === ')') {
      // If there are no opening parenthesis, then it must be unbalanced
      if (parensArr.length === 0) return false;

      // If previous char is not an opening parenthesis, it must be unbalanced
      if (parensArr[parensArr.length - 1] === '(') {
        parensArr.pop();
      }
    }
  }

  return !parensArr.length;
}

// Test cases
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);