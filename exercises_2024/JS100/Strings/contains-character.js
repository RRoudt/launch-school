// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x')); // true
console.log(byteSequence.includes('0')); // false

// Further exploration
// It's a great exercise to try to implement the functionality of String.prototype.includes() yourself.

function ownIncludes(string, charToCheck) {
  for (let char of string) {
    if (char === charToCheck) return true;
  }
  return false;
}

console.log(ownIncludes(byteSequence, 'x')); // true
console.log(ownIncludes(byteSequence, '0')); // false