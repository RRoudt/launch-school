/* JS100 - Arrays - 11. Checking items off the grocery list

Instructions:
+ We have made a grocery list, and as we check off items on that list, we would like to remove them.
+ Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

Input:
+ Array

Output:
+ Console log as each element is removed
+ Empty array (but the same array as the input array)

Rules:
+ Log the element as it's removed
+ Mutate the array; return the same (now empty) array

Data:
+ Array (input)
+ Strings (elements)

Algorithm:
+ Iterate over the array
  + Log the current element
  + Remove the current element
+ When the array is empty, return the array
*/

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function checkOffItems(list) {
  for (let index = list.length; index > 0; index -= 1) {
    console.log(list.shift());
  }

  return list;
}

checkOffItems(groceryList);
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
/////////
// returns: 
// []

console.log(groceryList); // []