// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

/**
 * Solution
 */
class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }

  /**
   * My Solution
   */
  // traverseBF(fn) {
  //   const nodes = [this.root];
  //   let children = this.root.children;

  //   while (children.length) {
  //     let nextLevel = [];
  //     children.forEach(node => {
  //       nodes.push(node);
  //       nextLevel = [...nextLevel, ...node.children];
  //     });
  //     children = nextLevel;
  //   }

  //   for (let node of nodes) {
  //     fn(node);
  //   }
  // }

  // traverseDF(fn) {
  //   const nodes = this.traverseDFHelper([this.root]);

  //   for (let node of nodes) {
  //     fn(node);
  //   }
  // }

  // traverseDFHelper(nodes) {
  //   let values = [];
  //   nodes.forEach(node => {
  //     values = [...values, node];
  //     if (node.children.length) {
  //       values = [...values, ...this.traverseDFHelper(node.children)];
  //     }
  //   });
  //   return values;
  // }
}

module.exports = { Tree, Node };
