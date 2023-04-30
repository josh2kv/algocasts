// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {}
}

// 1 (2023-03-25)
// 2 (2023-03-28)
// 3 (2023-04-30)
class LinkedList {
  constructor() {}

  insertFirst(data) {}

  size() {}

  // return Node instance not node.data
  getFirst() {}

  //! have to return Node lastly not Node.next
  getLast() {}

  clear() {}

  removeFirst() {}

  removeLast() {}

  insertLast(data) {}

  //* index 0 = this.head
  // AGAIN
  getAt(index) {}

  // AGAIN
  removeAt(index) {}

  // AGAIN
  insertAt(data, index) {}

  // AGAIN
  forEach(fn) {}

  // AGAIN
  [Symbol.iterator]() {}
}

module.exports = { Node, LinkedList };
