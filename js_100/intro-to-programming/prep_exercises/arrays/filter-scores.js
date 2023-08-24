/* Exercise 5: Count the number of elements in scores that are 100 or above. */

const scores = [96, 47, 113, 89, 100, 102];

const scoresAboveHundred = scores.filter(score => score >= 100).length;

console.log(scoresAboveHundred);