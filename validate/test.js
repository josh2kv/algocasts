const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

//              10
//       5               15
//    0    null    null       20
//null  7                   11   29
test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(7);

  expect(validate(n)).toEqual(false);
});
