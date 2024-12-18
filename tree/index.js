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

// 1 (2023-04-05)
// 2 (2023-04-10)
// 3 (2023-04-27)
// 4 (2024-11-16)
class Node {
  constructor(data) {}

  add(data) {}

  remove(data) {}
}

class Tree {
  constructor() {}

  traverseBF(fn) {}

  traverseDF(fn) {}
}

module.exports = { Tree, Node };
