function removeLastChar(str) {
  return str.slice(0, -1);
}

// Test cases
console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'