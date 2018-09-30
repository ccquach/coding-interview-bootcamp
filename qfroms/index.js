// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

/**
 * Solution
 */
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const removedRecord = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return removedRecord;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const peekedRecord = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return peekedRecord;
  }
}

/**
 * My Solution
 */
// class Queue {
//   constructor() {
//     this.s1 = new Stack();
//     this.s2 = new Stack();
//   }

//   add(record) {
//     this.reverseStack(this.s2, this.s1);
//     this.s1.push(record);
//     this.reverseStack(this.s1, this.s2);
//   }

//   remove() {
//     return this.s2.pop();
//   }

//   reverseStack(stackOrigin, stackDestination) {
//     while (stackOrigin.peek()) {
//       stackDestination.push(stackOrigin.pop());
//     }
//   }

//   peek() {
//     return this.s2.peek();
//   }
// }

module.exports = Queue;
