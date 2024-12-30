/* Easy 4.6: Letter Counter (Part 1)

Instructions:
- Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.
- Words consist of any sequence of non-space characters.

Input:
- String consisting of zero or multiple words, separated by a space

Output:
- Object where the length of the words in the key, and the value is the amount of times a word of that length appears in the string

Rules:
- Word length is used as key name
- Number of times a word of the key's length appear is used as value
- A word is any sequence of characters, be they alphanumeric or not

Data:
- String (input)
- Array (processing)
- Object (output)

Algorithm:
Get inputString
Set new empty object: outputObj
Turn inputString into an array: wordsArr
If inputString is empty, return the empty outputObj
Iterate over wordsArr:
  If a key with the current element's length as name exists in outputObj:
    Increment the key-value pair in outputObj with the name of the current element's length from wordsArr by 1
  Else:
    Create a key-value pair in outputObj with as name the value of the current element's length from wordsArr
  Endif
Enditeration
Return outputObj
*/

function wordSizes(inputString) {
  let outputObj = {};
  let wordsArr = inputString.split(' ');

  if (inputString.length === 0) return outputObj;

  for (let word of wordsArr) {
    if (outputObj.hasOwnProperty(word.length)) {
      outputObj[word.length] += 1; 
    } else {
      outputObj[word.length] = 1; 
    }
  }

  return outputObj;
}

// Test cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}