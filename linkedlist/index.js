// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

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
    let node = this.head;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.getFirst().next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      }
      previous = node;
      node = node.next;
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (!lastNode) {
      this.head = new Node(data);
      return;
    }

    lastNode.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) return node;

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head || index < 0) return null;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) return null;

    previous.next = previous.next.next;
  }
  /**
   * mine
   */
  // removeAt(index) {
  //   if (!this.head) return null;

  //   if (index === 0) {
  //     this.head = this.head.next;
  //     return;
  //   }

  //   let counter = 1;
  //   let previous = this.head;
  //   let node = this.head.next;

  //   while (counter < index || counter === index) {
  //     if (!node) return null;

  //     if (index === counter) {
  //       previous.next = node.next;
  //       return;
  //     }

  //     previous = node;
  //     node = node.next;

  //     counter++;
  //   }

  //   return null;
  // }

  insertAt(data, index) {
    if (index < 0) return;

    if (index === 0) {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }

      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();

    // if (!previous) {
    //   this.getLast().next = new Node(data);
    //   return;
    // }

    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

const l = new LinkedList();

module.exports = { Node, LinkedList };
