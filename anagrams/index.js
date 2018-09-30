// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * Solution #1
 */
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
//     return false;

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '')) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

/**
 * Solution #2
 */
function anagrams(stringA, stringB) {
  return sortString(stringA) === sortString(stringB);
}

function sortString(str) {
  return str
    .replace(/[\W_]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

/**
 * My Solution
 */
// function anagrams(stringA, stringB) {
//   let mapA, mapB;
//   [mapA, mapB] = [stringA, stringB].map(str => {
//     const lowerAlpha = str.replace(/[\W_]/g, '').toLowerCase();
//     const charMap = {};
//     for (let char of lowerAlpha) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   });

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

//   return Object.keys(mapA).every(char => mapA[char] === mapB[char]);
// }

module.exports = anagrams;
