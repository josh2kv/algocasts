// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// 1 (2023-03-25)
// 2 (2023-03-28)
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  // return Node instance not node.data
  getFirst() {
    return this.head;
  }

  //! hove to return Node lastly not Node.next
  getLast() {
    if (!this.head) return null;

    let curNode = this.head;

    while (curNode.next) {
      curNode = curNode.next;
    }

    return curNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let curNode = this.head.next;
    let preNode = this.head;

    while (curNode.next) {
      preNode = curNode;
      curNode = curNode.next;
    }

    preNode.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }

    const lastNode = this.getLast();

    lastNode.next = new Node(data, null);
  }

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
