console.log([2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    console.log(`a: ${a}, b: ${b}`);
    return -1;
  } else if (a > b) {
    console.log(`a: ${a}, b: ${b}`);
    return 1;
  } else {
    console.log(`a: ${a}, b: ${b}`);
    return 0;
  }
})); // => [ 1, 2, 4, 9, 11, 21, 107 ]