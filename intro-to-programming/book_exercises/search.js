let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i+= 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
  // This line never executes because I use the break keyword two lines up
  console.log(array[i]);
}

console.log(`Index of 5 is: ${indexOfFive}`);