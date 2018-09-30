// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * Solution
 */
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

/**
 * My solution
 */
// function maxChar(str) {
//   // build character map
//   const chars = str.split('').reduce((map, char) => {
//     Object.keys(map).includes(char) ? map[char]++ : (map[char] = 1);
//     return map;
//   }, {});
//   // get key of max value
//   return Object.keys(chars).reduce(
//     (maxKey, nextChar) => (chars[nextChar] > chars[maxKey] ? nextChar : maxKey)
//   );
// }

module.exports = maxChar;
