// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// 1 2023-03-25
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {}

  size() {}

  // return Node instance not node.data
  getFirst() {}

  //! hove to return Node lastly not Node.next
  getLast() {}

  clear() {}

  removeFirst() {}

  removeLast() {}

  insertLast(data) {}

  //* index 0 = this.head
  getAt(index) {}

  removeAt(index) {}

  insertAt(data, index) {}

  forEach(fn) {}

  *[Symbol.iterator]() {}
}

module.exports = { Node, LinkedList };
