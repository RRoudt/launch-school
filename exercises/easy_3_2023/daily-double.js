/* JS101 — Easy 3.1:  ddaaiillyy ddoouubbllee

Input:
- String

Output:
- Deduplicated version of original string

Rules:
- Consecutive duplicate characters must be reduced to one character

Pseudocode:
- Set and get string
- Set dedupString: ''
- Loop through string, starting at index 0
  - If letter at index is NOT the same letter at the previous index:
    - Add letter at index to deduplicatedString;
- Return dedupString
*/

function crunch(string) {
  let dedupString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      dedupString += string[index];
    }
  }

  return dedupString;
}

// Test cases
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""