/* JS110 - Lesson 2.5: Practice Problem 2

Instructions:
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
  - 800 > 1869 > 1922 > 1925 > 1967
*/

// Test case
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

console.log(books);