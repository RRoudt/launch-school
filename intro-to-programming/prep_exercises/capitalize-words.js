/* Solution to exercise 10: Capitalize Words 

Challenge:
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

function capitalizeWords(str) {
  const wordsArray = str.split(' ');
  const wordsArrayCapitalized = wordsArray.map(word => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return wordsArrayCapitalized.join(' ');
}

console.log(capitalizeWords('launch school tech & talk'));