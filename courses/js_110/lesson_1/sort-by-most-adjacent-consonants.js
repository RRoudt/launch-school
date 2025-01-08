/* JS110 - Lesson 1.8: PEDAC Guided Practice: Sort by Most Adjacent Consonants

Instructions:
- Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains.
- If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other.
- Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.
- Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

Input:
- An array of strings

Output:
- A new array where the elements are sorted by their string values

Rules:
- Strings must be sorted by the highest number of consecutive consonants, ignoring spaces
- Strings with the same number of consecutive/adjacent consonants should keep their original sort order in relation to each other
- 'y' and 'w' are counted as consonants
  - In other words: a, e, o, i, u should be excluded when checking the alphabet
- The array should be sorted in desencing order: from most adjacent consonants in a word to the least
- A single consonant does not count as an adjacent consonant and should therefore have no influence on the sort order

Questions:
Q: What is a consontant exactly?
  A: It seems like any letter that isn't a, e, i, o, u
Q: Does capitalization of letter matter?
  A: The test cases don't give an answer (they're all lowercase), so let's assume capitalization doesn't matter
Q: Should spaces be ignored completely in the string elements?
  A: Yes, it seems to be the case
Q: Can elements be empty?
  A: There's no test case with an empty string, so let's assume no
Q: What is a word contains a single consonant, should it count for the order?
  A: Looking at the test cases, the order should remain the same:
  ['aa', 'baa', 'ccaa', 'dddaa'] -> ['dddaa', 'ccaa', 'aa', 'baa']

Data:
- Array (input)
- String (processing)
- Array (processing)
- Array (output)

Algorithm:
Get an array with strings: inputArray
Make a copy of inputArray: sortedArray
Iterate over sortedArray:
  Iterate over each string:
    Count number of adjacent consonants: countMaxAdjacentConsonants(string)
      Remove spaces from string
      Set an empty number variable to keep track of longest adjacent consonants: maxConsonants
      Set an empty number variable to keep track of current adjacent consonants: currentConsonants
      Iterate over the string:
        If the current character is a consonant and the previous was as well
          Increment currentConsonants by 1
          If currentConsonants is higher than maxConsonants:
            Set maxConsonants to value of currentConsonants
          Endif
        Else:
          Set currentConsonants to 0
        Endif
      End iterating over string
      Return maxConsonants
    If number of consonants in current element is lower than the number of consonants in the next element:
      Swap positions
    Else:
      Leave positions as-is
    Endif
  End iterating over the string
End iterating over sortedArray
Return sortedArray
*/

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let maxConsonants = 0;
  let currentConsonants = 0;
  
  for (let char of string) {
    if ((/[a-z]/i.test(char) && /[^aeiuo]/i.test(char))) {
      currentConsonants += 1;
      maxConsonants = Math.max(maxConsonants, currentConsonants);
    } else {
      currentConsonants = 0;
    }
  }

  return maxConsonants;
}

function sortStringsByConsonants(inputArray) {
  let sortedArray = inputArray.slice();

  sortedArray.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedArray;
}

// Test cases
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']