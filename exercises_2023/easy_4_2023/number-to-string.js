function doubleNumbers(numbers) {
  for (let num of numbers) {
    num *= 2;
  }
  
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [1, 4, 3, 7, 2, 6]