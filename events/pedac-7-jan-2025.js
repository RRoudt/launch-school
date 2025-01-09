/*
BOUNCY COUNT
Some numbers have only ascending digits, like 123, 3445, 2489, etc.
Some numbers have only descending digits, like 321, 5443, 9842, etc.
A number is "bouncy" if it has both ascending and descending digits, like 313, 92543, etc.
Write a method that takes a list of numbers and counts how many of them are bouncy.

Problem:
- Write a method that takes an array (containing numbers as elements), and counts how many of them are bouncy

Examples:
- A bouncy number is if it has both ascending and descending digits, for example:
  313, 92543, 909
- A number is NOT bouncy if it only has descending or ascending digits, for example:
  - Descending: 321, 5443, 9842, 654
  - Ascending: 123, 3445, 2489, 456
- A bouncy number will have at least 3 digits
- Return 0 if an empty array is input

Data:
- Input: list or array
- Output: integer representing a quantity of bouncy numbers
- Intermediate:
  - String/Array/List: iterate through each digit
  - Boolean: to store if ascending/descending

Algorithm:
Get an array of numbers: inputArray
Set an empty number to keep track of number of bouncy numbers: bouncyNumbers
Iterate over inputArray:
  Turn the element into a string
  Sort the string
  If the sorted string is the same as the input string (meaning it's ascending):
    do nothing
  If the reversed sorted string is the same as the input string (meaning it's descending):
    do nothing
  Else:
    increment bouncyNumbers by one
  Endif
  End iterating over string
End iterating over inputArray
Return bouncyNumbers
*/

function bouncyCount(inputArray) {
  let bouncyNumbers = 0;

  for (let number of inputArray) {
    let strNumber = String(number);
    let sortedStrNumber = strNumber.split('').sort().join('');
    let reversedSortedStrNumber = sortedStrNumber.split('').reverse().join('');

    if (strNumber !== sortedStrNumber && strNumber !== reversedSortedStrNumber) bouncyNumbers += 1;
  }

  return bouncyNumbers;
}

// Test cases
console.log(bouncyCount([]) === 0)
console.log(bouncyCount([11, 0, 345, 21]) === 0)
console.log(bouncyCount([121, 4114]) === 2)
console.log(bouncyCount([176, 442, 80701644]) === 2)