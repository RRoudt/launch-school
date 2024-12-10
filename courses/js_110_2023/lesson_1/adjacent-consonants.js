/* Lesson 1.8: Sort by most adjacent consonants

Instructions:
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Input:
- Array of strings

Output:
- New array where the strings are sorted to the highest number of adjacent consonants a particular string contains

Rules:
- A new array should be returned
- The string with the highest number of adjacent consonants should appear first in the array, followed by the strings that progressively have less adjacent consonants
- If two strings have the same highest number of adjacent consonants, the string that appeared first in the source array should also appear first in the new sorted array.
- Consonants are considered adjacent when they are next to each other in the same word, or if there's a space between the two consonants in adjacent words. In other words: *spaces are ignored*.

Questions and answers:
- What's a consonant?
	- Looking at the test cases, I'm going to assume **anything other than `aeiou`**

- What is regarded an adjacent consonant? For example, will three adjacent consonants (`fgh`) count as one or two occurrences of adjacent consonants?
	- From the test cases, it seems like **letters are compared in pairs**. That means that if there are three adjacent consonants (as in `'dddaa'`), then there seems to be two adjacent consonants counted.

- Are the consonants case-sensitive in any way, or are an uppercase and a lowercase consonant regarded as adjacent?
	- I'm going to assume that **both an uppercase and a lowercase will count** as an occurrence of adjacent consonants.
		- To do so, I'll **lowercase the strings and remove the spaces**. That's because spaces need to be ignored when comparing adjacent consonants.

- Can strings be empty?
	- In the test cases, there are no empty strings. So I assume the answer will be **no, and I don't need to test for it**.

- What also seems the case that if there are no adjacent consonants in a string, they should be sorted at the end of the new returning array in the order that they appear in the source array.

Data:
- There are two data structures to work with: arrays and strings.
- There will be two arrays:
	- An unordered input array
	- A new order output array
- The strings will be the individual elements from the array
-  It might be useful to have a plain object as an intermediate structure to keep track of the number of adjacent consonants in each word. For example:

{
  'aa': 0,
  'baa': 0,
  'ccaa': 2,
  'dddaa': 3
}

Algorithm:
- Get an array of strings
- Create an object out of the array, using the string as key and setting its value to `0`: `consonantFrequencyObj`
- Iterate over the input array, and for each element:
	- Find the amount of adjacent consonants in string (another function):
		- Create a `counter` variable and set it to `0`
		- Remove all spaces from the string
		- Turn the string lowercase
		- Iterate over the string, from the start to the second to last character of the string, and for each character:
			- Check whether the current character *or* the next character contains `aeoiu`.
				- If yes, skip to the next character
				- If not, increase the value of the `counter` variable by 1
		- Return the `counter` value
	- In `consonantFrequencyObj`, set the value corresponding to the key with the current element's string, to the amount of occurrences of adjacent consonants
- Iterate through `consonantFrequencyObj` and return its keys in a new array, ordered by its value—from high to low (another function):
	- Turn the object into a two-dimensional array: `consonantFrequencyArr`
	- Create a new empty array: `orderedStrings`
	- Sort the array (`sort()` seems suitable), based on the second subelement from each element:
		- If the first element has a **higher** value (i.e. adjacent consonants) than the second element, return `-1`
		- If the first element has a **lower** value than the second element, return `1`
		- Otherwise, return `0`
	- Iterate through the sorted two-dimensional array and add the first element of every subarray (the string) to the `orderedStrings` array
	- Return the `orderedStrings` array
- Return the `orderedStrings` array
*/

function getSortedArrayFromObject(obj) {
  // Array to store the ordered strings
  let orderedStrings = [];

  // Turn the object into a two-dimensional array for sorting
  let consonantFrequencyArr = Object.entries(obj);

  // Sort the two-dimensional array
  consonantFrequencyArr.sort((first, second) => {
    if (first[1] > second[1]) {
      return -1;
    } else if (first[1] < second[2]) {
      return 1;
    } else {
      return 0;
    }
  });

  // Iterate through the order two-dimensional array and add the strings to the orderedStrings array
  consonantFrequencyArr.forEach(element => {
    orderedStrings.push(element[0]);
  });

  return orderedStrings;
}

function getNumberOfAdjacentConsonants(string) {
  let counter = 0;
  string = string.toLowerCase().split(' ').join('');
  for (let index = 0; index < string.length - 1; index += 1) {
    if ('aeiou'.includes(string[index]) || 'aeiou'.includes(string[index + 1])) {
      continue;
    } else {
      counter += 1;
    }
  }
  return counter;
} 

function sortStringsByConsonants(stringsArr) {
  // Setting up the intermediate object to keep track of the consonant frequency
  let consonantFrequencyObj = {};
  stringsArr.forEach(string => consonantFrequencyObj[string] = 0);

  // Iterate over the input array and get the number of adjacent consonants of each
  stringsArr.forEach(string => {
    // Find the amount of adjacent consonants in string
    const numberOfAdjacentConsonants = getNumberOfAdjacentConsonants(string);

    // Set value of key with same name as current string to number of adjacent consonants
    consonantFrequencyObj[string] = numberOfAdjacentConsonants;
  });

  // Get and return sorted array of strings
  return getSortedArrayFromObject(consonantFrequencyObj);
}

// Test cases
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']