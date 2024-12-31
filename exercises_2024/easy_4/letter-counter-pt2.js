/* Easy 4.7: Letter Counter (Part 2)

Instructions:
- Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
  - For instance, the word size of "it's" is 3, not 4.

Input:
- String consisting of zero or multiple words, separated by a space

Output:
- Object where the length of the words in the key, and the value is the amount of times a word of that length appears in the string

Rules:
- Word length is used as key name
- Number of times a word of the key's length appear is used as value
- A word is any sequence of alphabetic characters (interpunction isn't counted)

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
  Clean up the word, removing all non-alphabetic characters
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
    word = word.replace(/[^a-z]/gi, '');

    if (outputObj.hasOwnProperty(word.length)) {
      outputObj[word.length] += 1; 
    } else {
      outputObj[word.length] = 1; 
    }
  }

  return outputObj;
}

// Test cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}