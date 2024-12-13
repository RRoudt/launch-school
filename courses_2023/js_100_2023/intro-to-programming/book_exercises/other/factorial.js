function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i += 1) {
    product *= i;
  }
  return product;
}

console.log(factorial(6));