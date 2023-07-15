const rlSync = require('readline-sync');

const getName = (nameType) => rlSync.question(`What is your ${nameType} name?\n`);

console.log(`Hi ${getName('first')} ${getName('last')}!`);