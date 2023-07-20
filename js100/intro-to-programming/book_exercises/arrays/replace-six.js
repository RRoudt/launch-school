/* Solution to exercise 10: replace the value of 6 with 606 */

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

console.log(arr);

for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr[i].length; j += 1) {
    if (arr[i][j] === 6) arr[i][j] = 606;
  }
}

console.log(arr);
