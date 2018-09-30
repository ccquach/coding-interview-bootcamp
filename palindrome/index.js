// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Solution #1
 */
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversed;
// }

/**
 * Solution #2
 *
 * Inefficient solution because doing double the work necessary.
 * <Every> method iterates over each array item, but we already know
 * if string is palindrone after iterating over half the characters.
 */
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

/**
 * Other solutions
 */
// function palindrome(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return str === reversed;
// }

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reduce((reversed, char) => char + reversed, '');
//   return str === reversed;
// }

module.exports = palindrome;
