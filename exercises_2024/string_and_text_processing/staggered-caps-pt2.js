/* String and Text Processing 7: Staggered Caps (Part 2)

Instructions:
- Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme.
- Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
- Every other alphabetical character, starting from the first, should be capitalized and should be followed by a lowercase character.

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
- Only letters should change and be counted; non-letters should NOT be counted to determine what character to change

Data:
- String (input)
- String (output)

Algorithm:
Get a string
Keep track of capitalization: capitalize
  Initialize with true (meaning: yes, capitalize)
Turn string into an array and iterate over it, creating a new array:
  If the current character is alphabetical and capitalize is truthy:
    Set capitalize to false
    Add uppercase version of character to new array
  Else if current character is alphabetical and capitalize is falsy:
    Set capitalize to true
    Add lowercase version of character to new array
  Else:
    Add character as-is to new array
  Endif
End iterating over array, join new array as a string, and return new string
*/

function staggeredCase(string) {
  let capitalize = true;

  return string
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char) && capitalize) {
        capitalize = false;
        return char.toUpperCase();
      } else if (/[a-z]/i.test(char) && !capitalize) {
        capitalize = true;
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

// Test cases
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);