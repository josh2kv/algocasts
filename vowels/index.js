// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // 1 (2022-10-22)

  const reg = /[aeiou]/gi;

  const result = str.match(reg);

  return result ? result.length : 0;
}

module.exports = vowels;
