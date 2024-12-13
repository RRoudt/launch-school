rlSync = require('readline-sync');

const extractLanguage = (locale) => `Language: ${locale.split('_')[0]}`;
const extractRegion = (locale) => `Region: ${locale.split('_')[1].split('.')[0]}`;

const getLocale = rlSync.question("What's the locale? ");

console.log(extractRegion(getLocale));