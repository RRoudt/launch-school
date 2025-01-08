/* List Processing 9: Inventory Item Transactions

Instructions:
- Write a function that takes two arguments, an inventory item ID and a list of transactions
- The function returns an array containing only the transactions for the specified inventory item.

Input:
- A number (item ID)
- An array (with nested objects, containing transaction data)

Output:
- An array, but only with the filtered transactions

Rules:
- Filter based on the id property in each object in the input array

Questions:
Q: Should the function return a new array?
  A: Let's assume, yes

Data:
- Array (input)
- Objects (array elements)
- Number (transaction ID)
- Array (output)

Algorithm:
Get a number to filter on: targetID
Get an array to filter: transactions
Iterate over transactions, filtering it, and storing it as a new array:
  If value of the id property matches targetID:
    Add the current element to the new array
  Endif
End iterating over transactions and return the new array
*/

function transactionsFor(targetID, transactions) {
  return transactions.filter(object => object.id === targetID);
}

// Test case
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]