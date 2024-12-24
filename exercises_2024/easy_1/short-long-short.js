/* Easy 1.7: Long Short Long

Instructions:
- Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Input:
- Two strings

Output:
- One string

Rules:
- Structure of returning string:
  - Shorter string + longer string + shorter string
- Strings will always be of different lengths

Questions:
-

Data:
- Strings (input and output)

Algorithm:
+ Get string1
+ Get string2
+ If length of string1 is higher than length of string2:
  + Return string2 + string1 + string2
+ Otherwise:
  + Return string1 + string2 + string 1
*/

function shortLongShort(string1, string2) {
  return string1.length > string2.length ?
         string2 + string1 + string2 :
         string1 + string2 + string1;
}

// Test cases
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"