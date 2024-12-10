/* Solution to exercise 8: keep elements with odd length, but using reduce() only

Challenge:
- Use reduce() to determine the lengths of all the elements in an array of string values, and discard the even values (keep the odd values) */

function oddLengths(arr) {
  return arr.reduce((oddLengthElements, element) => {
    if (element.length % 2 === 1) {
      oddLengthElements.push(element.length);
    }
    return oddLengthElements;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]