/* String and Text Processing 3: Lettercase Counter

Problem:
Take a string and return an object with 3 properties:
  1. One representing the number of lowercase chars
  2. One representing the number of uppercase chars
  3. The number of characters that are neither

Input:
- A string

Output:
- An object

Questions:
Q: What is neither uppercase or lowercase?
  A: Numbers and non-alphabetical characters (assumption)

Rules:
- Count every uppercase and lowercase alphabetical character
- Count every number and interpunction as "neither"

Data:
- String (input)
- String (individual characters)
- Object (output)

Algorihtm
Get an inputString
Set an object outputObject:
  {lowercase: 0, uppercase: 0, neither: 0}
Iterate over inputString
  If character is alphabetical and uppercase:
    Add 1 to uppercase property
  Else if character is alphabetical and lowercase:
    Add 1 to lowercase property
  Else:
    Add 1 to neither
  Endif
End iterating over inputString
Return outputObjet
*/

function letterCaseCount(inputString) {
  let outputObject = {lowercase: 0, uppercase: 0, neither: 0};

  for (let char of inputString) {
    if (/[A-Z]/.test(char)) {
      outputObject.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      outputObject.lowercase += 1;
    } else {
      outputObject.neither += 1;
    }
  }

  return outputObject;
}

// Test cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
