/* Exercise 3: Even Numbers

- Log to the console:
  - All even numbers from 1 to 99, inclusive
  - Each number on a separate line

Mental model:
- SET iterator = 1
- WHILE iterator <= 99
  - IF iterator % 2 === 0
    - PRINT iterator
*/

for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 0) console.log(number);
}
