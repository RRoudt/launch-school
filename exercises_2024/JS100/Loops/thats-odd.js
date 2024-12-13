/*
Write a while loop that logs all odd natural numbers between 1 and 40.

Rules:
+ Use a while loop
+ Log all odd whole numbers
+ Start logging a 1, end logging at 39 (inclusive)
*/

let num = 0;

while (num < 40) {
  num += 1;
  if (num % 2 === 0) continue;
  console.log(num);
}