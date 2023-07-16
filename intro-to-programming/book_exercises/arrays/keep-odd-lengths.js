/* Solution to exercise 6: keep elements with odd length

Challenge:
- Use map() and filter() to first determine the lengths of all the elements in an array of string values
- Discard the even values (keep the odd values) */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(word => word.length)
    .filter(wordLength => wordLength % 2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]