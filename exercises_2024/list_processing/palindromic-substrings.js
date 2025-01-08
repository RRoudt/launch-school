/* List Processing 6: Palindromic Substrings

Instructions:
Write a function that returns a list of all palindromic substrings of a string.
  - That is, each substring must consist of a sequence of characters that reads the same forward and backward.
  - The substrings in the returned list should be sorted by their order of appearance in the input string.
  - Duplicate substrings should be included multiple times.
- You may (and should) use the substrings function you wrote in the previous exercise.
- For the purpose of this exercise, you should consider all characters and pay attention to case; 
  - 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not.
- In addition, assume that single characters are not palindromes.

Input:
- A string

Output:
- An array containing all palindromic substrings from the input string

Rules:
- A palindrome is a word that reads the same backwards as forwards
- The check for palindromes should be case sensitive
- A string of length 0 or 1 is never a palindrome
- Substrings can be part of other substrings

Questions:
Q: What is a palindromic substring?
  A: A substring that reads the same backwards as forwards
Q: What does it mean that "duplicate substrings should be included multiple times"?
  A: I assume that if a substring is part of another substring, the other substring should appear in the resulting array

Data:
- String (input)
- String (output)

Algorithm:
Get a string: inputString
Get all substrings from inputString: substringArray
Set an empty array: palindromicSubstringArray
Iterate over substringArray
  If current substring is a palindrome, add it to palindromicSubstringArray:
    If substring is of length 0 or 1, return false
    Turn substring into an array, reverse it, and turn into a string again
    Return whether the substring is the same as the reversed substring
End iterating over substringArray
Return palindromicSubstringArray
*/

function substrings(inputString) {
  let outputStrings = [];

  for (let index = 0; index < inputString.length; index += 1) {
    for (let subIndex = index; subIndex < inputString.length; subIndex += 1) {
      outputStrings.push(inputString.slice(index, subIndex + 1));
    }
  }

  return outputStrings;
}

function isPalindrome(inputString) {
  if (inputString.length <= 1) return false;

  let reversedInputString = inputString.split('').reverse().join('');
  return inputString === reversedInputString;
}

function palindromes(inputString) {
  let substringArray = substrings(inputString);

  return substringArray.filter(substring => isPalindrome(substring));
}


// Test cases
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]