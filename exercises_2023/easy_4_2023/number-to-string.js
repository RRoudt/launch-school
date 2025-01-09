// Create an object that expresses the frequency with which each letter occurs in this string:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
// Algorithm:
// Create an empty object to keep track of the letters: letterObj
// Iterate over the string
//   If the current character is a property in letterObj:
//     Increase property-value by 1
//   Else:
//     Add property to letterObj and set the value to 1
//   Endif
// End iterating over string
// Return letterObj
//
// Q: Ignore spaces?
//   A: Let's assume, yes

function countLetters(string) {
  let letterObj = {};
  
  for (let char of string) {
    if (char === ' ') continue;
    
    letterObj[char] = letterObj.hasOwnProperty(char) ?
      letterObj[char] += 1 :
      letterObj[char] = 1;
  }
  
  return letterObj;
}

let statement = "The Flintstones Rock";

console.log(countLetters(statement));