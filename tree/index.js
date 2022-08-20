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

class Tree {
  constructor() {
    this.root = null;
  }

  // parent nodes를 arr에 저장
  // arr의 앞에서부터 parent node를 하나씩 뺌(node에 저장)
  // children이 있으면 하나씩 빼서 arr의 뒤에 붙임
  // 그리고 그 parent는 fn에 넘김
  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  // children을 arr의 뒤에 붙이는 대신 앞에 붙임. 나머지 같음
  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
