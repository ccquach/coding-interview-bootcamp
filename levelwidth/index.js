// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/**
 * Solution
 */
function levelWidth(root) {
  const counters = [0];
  const arr = [root, 's'];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

/**
 * My Solution
 */
// function levelWidth(root) {
//   const widths = [1];
//   let children = root.children;

//   while (children.length) {
//     let counter = 0;
//     const nextLevel = [];
//     children.forEach(node => {
//       counter++;
//       nextLevel.push(...node.children);
//     });
//     widths.push(counter);
//     children = nextLevel;
//   }
//   return widths;
// }

module.exports = levelWidth;
