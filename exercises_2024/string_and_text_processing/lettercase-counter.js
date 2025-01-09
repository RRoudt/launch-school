/* String and Text Processing 3: Lettercase Counter

Instructions:
- Write a function that takes a string and returns an object containing three properties:
  - one representing the number of characters in the string that are lowercase letters
  - one representing the number of characters that are uppercase letters
  - one representing the number of characters that are neither.
  Example:
  'abCdef 123' -> { lowercase: 5, uppercase: 1, neither: 4 }

Input:
- A string

Output:
- An object

Questions:
Q: What are spaces and lexical marks?
  A: They're counted as 'neither'
Q: How should an empty string be treated?
  A: Still an object should be returned: { lowercase: 0, uppercase: 0, neither: 0 }

Rules:
- Accept a string as input
- Output an object
- Store the number of lowercase letters in the property 'lowercase'
- Store the number of uppercase letters in the property 'uppercase'
- Store the number of other characters in the property 'neither'

Data:
- String (input)
- Object (output)

Algorithm:
Set an  object to keep track of type of letters: caseObject
Iterate over the string
  If the current character is a lowercase letter:
    Add one to the property 'lowercase' of caseObject
  Else if the current character is an uppercase letter:
    Add one to the property 'uppercase' of caseObject
  Else:
    Add one to the property 'neither' of caseObject
  End if
End iterating over string
Return caseObject
*/

function letterCaseCount(string) {
  let caseObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      caseObject.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      caseObject.uppercase += 1;
    } else {
      caseObject.neither += 1;
    }
  });

  return caseObject;
}

// Test cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }