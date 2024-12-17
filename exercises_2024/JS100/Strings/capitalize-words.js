/*
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

Input:
+ A string

Output:
+ A string where every first letter of every word is capitalized
*/

function capitalizeWords(string) {
  let stringArr = string.split(' ');
  
  let capitalizedString = stringArr.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');

  return capitalizedString;
}

// Test case
console.log(capitalizeWords('launch school tech & talk')); // 'Launch School Tech & Talk'