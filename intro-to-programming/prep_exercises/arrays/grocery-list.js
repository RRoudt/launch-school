/* Exercise 11: Write code that removes the items from 'groceryList' one by one, until it is empty. */

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); 
// logs:
// []