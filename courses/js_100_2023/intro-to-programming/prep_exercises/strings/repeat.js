function repeat(num, str) {
  let repeatedStr = '';
  for (let i = 0; i < num; i += 1) {
    repeatedStr += str;
  }
  return console.log(repeatedStr);
}

repeat(3, 'ha'); // 'hahaha'
repeat(4, 'yes'); // 'yesyesyesyes'