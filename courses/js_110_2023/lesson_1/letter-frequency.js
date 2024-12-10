/* Practice problem 13.11: Letter frequency

Instructions:
- Create an object that expresses the frequency with which each letter occurs in this string.

Input:
- String

Output:
- Object

Rules:
- Resulting object needs to have each letter of the input string as key
  - Spaces are skipped.

Data:
The output will look something like:
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

Algorithm:
- Get string and remove all spaces
- Turn space-less string into an array: letters
- Create a new empty object: letterFrequencyObj
- Iterate over the letters array
  - Check if letterFrequencyObj already has a key (property) of the current element value
    - If yes, the value of the key with the current elements name gets incremented by 1
    - If not, a new key is added to the object with as value 1
- Return letterFrequencyObj
*/

function letterFrequency(str) {
  const letters = str.split(' ').join('').split('');
  let letterFrequencyObj = {};
  
  letters.forEach(letter => {
    if (letterFrequencyObj.hasOwnProperty(letter)) {
      letterFrequencyObj[letter] += 1;
    } else {
      letterFrequencyObj[letter] = 1;
    }
  });

  return letterFrequencyObj;
}

let statement = "The Flintstones Rock";
console.log(letterFrequency(statement));