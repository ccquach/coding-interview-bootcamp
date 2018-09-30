// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * Solution #1
 */
// function vowels(str) {
//   let counter = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }

/**
 * Solution #2
 */
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

/**
 * My Iterative Solution
 */
// function vowels(str) {
//   const letters = 'aeiou';
//   return str
//     .toLowerCase()
//     .split('')
//     .filter(char => letters.includes(char)).length;
// }

/**
 * My RegEx Solution
 */
// function vowels(str) {
//   const regex = /[aeiou]/g;
//   const matches = str.toLowerCase().match(regex);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
