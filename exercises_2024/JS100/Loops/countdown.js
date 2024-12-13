/* The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

Rules:
+ Count down from 10 to 1
- After 1, log 'Launch!'
*/

for (let i = 10; i >= 0; i -= 1) {
  console.log(i > 0 ? i : 'Launch!');
}