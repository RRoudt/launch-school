/*
Write a function that extracts the region code from a locale. For example:

Rules:
+ Write a function
+ Extract the region code from a locale. Example:
  + Locale: 'en_US.UTF-8'
  + Region code: 'US'
*/

function extractRegion(locale) {
  return locale.slice(3, 5);
}

// Test cases
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'