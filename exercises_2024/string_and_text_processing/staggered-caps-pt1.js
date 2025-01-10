/* String and Text Processing 6: Staggered Caps (Part 1)

Instructions:
- Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme.
- Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character.
- Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Input:
- String

Output:
- String with staggered capitalization

Questions:
Q: What is a "staggered capitzalization scheme"?
  A: Every other letter is capitalized, starting with the first character:
  StAgGeRrEd CaPiTaLiZaTiOn

Rules:
- Capitalization should start with the first character of the input string
  So, at index: 0, 2, 4, 6 (even indexes)
    - Even index is uppercase
    - Odd index is lowercase
- Only letters should change; but non-letters should still be counted to determine what character to change

Data:
- String (input)
- Alphabetical letters (string subtype)
- String (output)

Algorithm:
Get a string
Turn string into an array and iterate over it, creating a new array:
  If the current index is even:
    Add uppercase version of character to new array
  Else:
    Add lowercase version of character to new array
  Endif
End iterating over array, join new array as a string, and return new string
*/

function staggeredCase(string) {
  return string
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

// Test cases
console.log(staggeredCase('I Love Launch School!') === 'I LoVe lAuNcH ScHoOl!');              // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS') === 'AlL_CaPs');                                        // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers') === 'IgNoRe 77 ThE 4444 nUmBeRs');    // "IgNoRe 77 ThE 4444 nUmBeRs"