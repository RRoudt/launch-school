/* Exercise 7: Short long Short

- Write a function that takes two string as arguments
- Determine the length of the two strings
- Return the result of concatinating the short, long, then the short
  - You may assume the strings are of different lengths

Pseudocode:
START by asking two arguments (firstStr, secondStr) in shortLongShort()
IF length firstStr < secondStr
  RETURN firstStr.concat(secondStr, firstStr)
ELSE
  RETURN secondStr.concat(firstStr, secondStr)
*/

function shortLongShort(firstStr, secondStr) {
  if (firstStr.length < secondStr.length) {
    return firstStr.concat(secondStr, firstStr);
  } else {
    return secondStr.concat(firstStr, secondStr);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"