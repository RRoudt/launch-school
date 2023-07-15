const rlSync = require('readline-sync');

const multiply = (firstNum, secondNum) => firstNum * secondNum;

const promptMultiply = () => {
  const firstNum = rlSync.question("Enter the first number: ");
  const secondNum = rlSync.question("Enter the second number: ");

  const multipliedNum = multiply(firstNum, secondNum);

  return `${firstNum} * ${secondNum} = ${multipliedNum}`;
}

console.log(promptMultiply());