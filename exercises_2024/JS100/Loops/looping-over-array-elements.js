/*
Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

Rules:
+ Use a while loop
+ Log each element
+ Stop after the last element
  + Increment index by 1
*/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}