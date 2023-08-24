/* Exercise 10: Multiples of 3 and 5

- Write a function that:
  - Computes the sum of all numbers between 1 and num (inclusive)
  - But only numbers that are multiples of 3 or 5
- Assume that the number passed in is an integer greater than 1

Example:
- if the supplied number is 20
- the result should be 98
  - 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 = 98

Pseudocode:
GET and SET target
SET sum = 0;
SET num = 1
WHILE num <= target
  IF num % 3 === 0 || num % 5 === 0
    sum = sum + num
RETURN sum
*/

function multisum(target) {
  let sum = 0;

  for (let num = 1; num <= target; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) sum += num;
  }

  return console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168