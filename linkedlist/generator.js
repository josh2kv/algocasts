class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (const child of this.children) {
      // yield* 또 다른 generator를 호출하겠다
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}

console.log(values);
