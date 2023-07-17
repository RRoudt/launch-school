/* Exercise 6: Write some code that iterates through the sub-arrays and logs each vocabulary word to the console. */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(arr => 
  arr.forEach(element => console.log(element))
);

// Expected output:
// happy
// cheerful
// merry
// etc...