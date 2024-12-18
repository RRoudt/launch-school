/* JS100 - Arrays - 6. Vocabulary

Instructions:
+ We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

Input:
+ Nested array (two dimensions total)

Output:
+ Each individual subelement, logged to the console

Rules:
+ Elements must be logged to the console

Data:
+ Nested array (input)
+ Strings (output)

Algorithm:
+ Iterate over array
  + Iterate over each nested array
    + Log every element of the nested array to the console
*/

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logWords(arr) {
  arr.forEach(subArr => {
    subArr.forEach(word => {
      console.log(word);
    });
  });
}

// Test case
logWords(vocabulary);

// Expected output:
// happy
// cheerful
// merry
// etc...