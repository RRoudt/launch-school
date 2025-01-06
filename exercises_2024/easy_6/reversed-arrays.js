/* Easy 6.9: Reversed Arrays

Instructions:
- Write a function that takes an Array as an argument and reverses its elements in place.
  - That is, mutate the Array passed into this method.
  - The return value should be the same Array object.
- You may not use Array.prototype.reverse().

Input:
- An array

Output:
- An array; the same as the input array, but reversed

Rules:
- Not allowed to use Array.prototype.reverse()

Data:
- Array (input)
- Array (output)

Algorithm:
Get an array: arr
Set a number variable to 0: leftIndex
Set a number variable to arr.length - 1: rightIndex
While leftIndex < rightIndex:
  Swap the positions of the elements in arr at the leftIndex and rightIndex
  Increase leftIndex
  Decrease rightIndex
Return arr
*/

function reverse(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex++;
    rightIndex--;
  }

  return arr;
}

// Test cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true