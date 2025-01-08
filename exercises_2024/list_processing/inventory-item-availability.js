/* List Processing 10: List Item Availability

Instructions:
- Write a function that returns true or false based on whether or not an inventory item is available.
- The function takes two arguments: an inventory item and a list of transactions.
- The function should return true only if the sum of the quantity values of the item's transactions is greater than zero.
  - Notice that there is a movement property in each transaction object.
  - A movement value of 'out' will decrease the item's quantity.
- You may (and should) use the transactionsFor function from the previous exercise.

Input:
- A number (inventory item ID)
- An array (list of transactions)

Output:
- A boolean
  - True if item is in stock
  - False if item is out of stock

Rules:
- Return a boolean: true (when item is in stock) or false (when item is out of stock)
- When an item's movement is 'in', the stock goes up by the number in quantity
- When an item's movement is 'out', the stock goes down by the number in quantity

Questions:
Q: When is a product in stock?
  A: When more items came in than went out; when stock is more than 0

Data:
- Number (input)
- Array (input)
- Objects (array elements)
  - Numbers (object values: id, quanitity)
  - String (object value: movement)
- Array (output)

Algorithm:
Get a number to filter on: targetID
Get an array to filter: transactions
Filter transactions and store them in a variable: filteredTransactions
Iterate over filteredTransactions, adding and subtracting depending on the movement, and storing the result in a variable: stock
  If movement equals 'in':
    Add the quantity to the sum
  Else:
    Subtract the quantity from the sum
  Endif
End iterating over filteredTransactions
Return whether stock is higher than 0
*/

function transactionsFor(targetID, transactions) {
  return transactions.filter(object => object.id === targetID);
}

function isItemAvailable(targetID, transactions) {
  let filteredTransactions = transactionsFor(targetID, transactions);

  let stock = filteredTransactions.reduce((sum, transaction) => {
    return transaction.movement === 'in' ?
      sum += transaction.quantity :
      sum -= transaction.quantity;
  }, 0);

  return stock > 0;
}

// Test cases
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions) === false);     // false
console.log(isItemAvailable(103, transactions) === false);     // false
console.log(isItemAvailable(105, transactions) === true);     // true