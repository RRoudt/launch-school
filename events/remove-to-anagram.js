/* Study session with Fuad on Sunday, January 12th, 2025

Instructions:
- Given two words, how many letters do you have to remove from them to make them anagrams?

Input:
- Two strings

Output:
- Number (representing the amount of characters that need to be removed to make the input strings anagrams)

Questions:
Q: What is an anagram?
  A: A new word you can make out of all the letters of another word
Q: When is an anagram valid? I.e., does ik need to be a real English word?
  A: An anagram is valid when both words contain exactly the same letters, but in a different order (assumption)
Q: Will the input words be of the same length?
  A: Not necessarily 
Q: Will the input strings contain spaces?
  A: No, they're words
Q: When to count a character?
  A: Any time a character is removed in order to make a potential valid test case for the anagram, count it once
Q: How many anagrams need to be searched?
  A: One, the first hit (assumption)
Q: How to handle empty strings?
  A: An empty string is an anagram

Rules:
- Accept two strings as input
  - Inputs can be of different length
- Return a number
  - The number represents the number of characters removed to find the first matching anagram
- An anagram is a word that is made up of exactly the letters in another word, but the letter order is different

Data:
- Strings (input)
- Strings (processing)
- Arrays (processing)
- Number (output)

Algorithm:
Get two strings: str1, str2
Sort both strings alphabetically and save them: sortedStr1, sortedStr2
Set a variable to 0: count
If str1 and str2 are not of the same length:
  Determine longest string
  Subtract length of shortest string from longest string, add this to count
  Make both strings the length of the shortest string
Endif
While str1 and str2 (both sorted) are not equal:
  Remove one character from each string, add 2 to count
End while
Return count
*/

function anagram_difference(str1, str2) {
  let count = 0;
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  if (str1.length !== str2.length) {
    let longestStr = str1.length > str2.length ? str1 : str2;
    let shortestString = str1.length < str2.length ? str1 : str2;
    count = longestStr.length - shortestString.length;

    sortedStr1 = sortedStr1.slice(0, shortestString.length);
    sortedStr2 = sortedStr2.slice(0, shortestString.length);
  }

  while (sortedStr1 !== sortedStr2) {
    sortedStr1 = sortedStr1.slice(0, sortedStr1.length - 1);
    sortedStr2 = sortedStr2.slice(0, sortedStr2.length - 1);
    console.log(`str1: ${sortedStr1} | str2: ${sortedStr2}`)
    count += 2;
  }

  return count;
}

// Test cases
console.log(anagram_difference('codewars', 'hackerrank'));
// console.log(anagram_difference('', '') == 0);
// console.log(anagram_difference('a', '') == 1);
// console.log(anagram_difference('', 'a') == 1);
// console.log(anagram_difference('ab', 'a') == 1);
// console.log(anagram_difference('ab', 'ba') == 0);
// console.log(anagram_difference('ab', 'cd') == 4);
// console.log(anagram_difference('aab', 'a') == 2 );
// console.log(anagram_difference('a', 'aab') == 2 );
// console.log(anagram_difference('codewars', 'hackerrank') == 10);
// console.log(anagram_difference("oudvfdjvpnzuoratzfawyjvgtuymwzccpppeluaekdlvfkhclwau", "trvhyfkdbdqbxmwpbvffiodwkhwjdjlynauunhxxafscwttqkkqw") == 42);
// console.log(anagram_difference("fcvgqognzlzxhmtjoahpajlplfqtatuhckxpskhxiruzjirvpimrrqluhhfkkjnjeuvxzmxo", "qcfhjjhkghnmanwcthnhqsuigwzashweevbegwsbetjuyfoarckmofrfcepkcafznykmrynt") == 50);