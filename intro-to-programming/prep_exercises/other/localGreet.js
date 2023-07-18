rlSync = require('readline-sync');

// Prompt user for the locale
const getLocale = () => rlSync.question("What's the locale?\n");

// Extract the language and region from the locale
const extractLanguage = (locale) => locale.split('_')[0];
const extractRegion = (locale) => locale.split('_')[1].split('.')[0];

// Look up greeting based on language and region
const localGreet = () => {
  const locale = getLocale();
  const language = extractLanguage(locale);
  const region = extractRegion(locale);

  switch (language) {
    case 'en':
      switch (region) {
        case 'US':
          return 'Howdy!';
        case 'GB':
          return 'Oh hello there';
        case 'AU':
          return "G'day mate!";
        default:
          return 'Hi';
      }
    case 'fr':
      return 'Salut';
    case 'nl':
      return 'Hallo daaro!';
  }
}

console.log(localGreet());