# The Coding Interview Bootcamp: Algorithms + Data Structures

Ace your next Javascript coding interview by mastering data structures and algorithms.

![thumbnail](https://img-c.udemycdn.com/course/240x135/1409142_1879_8.jpg)

- Creator: Stephen Grider
- Platform: Udemy
- [Course Link](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

## Usage

```bash
jest 'folder-name'/test.js --watch
```

## Tips

### 1. String Reversal

- `Array.reverse()`
- `for...of`
- `Array.reduce()`
- `Array.unshift()`

> 💡 되도록 for loop 대신 for-of or for-in loop를 사용하자

> 📝 string ↔ array: `String.split("separator")` ↔ `Array.join("separator")`

### 2. Palindromes

- `Array.reverse()`
- `Array.every()`⭐

### 3. Integer Reversal

- `Math.sign()`⭐

> 💡 `parseInt()` 와 `+`는 결과가 다를 수 있다
>
> ```ts
> parseInt('02-') // 2
> +('02-') // NaN
>```

### 4. Max Chars

- `buildCharMap()`

### 5. FizzBuzz

- `for(;;)`

### 6. Array Chunking

- `Array.slice()`
- without `Array.slice()`

### 7. Anagrams

- `buildCharMap()`
- `Array.sort()`

> 🚨 `Array.foreach()`을 중간에 멈추는 방법은 throw exception뿐
> There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
> Early termination may be accomplished with:
>
> - A simple loop
> - A `for...of` loop

> 💡 Regular Expressions(<https://www.datacamp.com/cheat-sheet/regular-expresso>)
>
> - `^`: match start of line
>   - ex) `^r` ▶ ==r==abbit / ==r==accoon
> - `\w`: match word characters
>   - ex) `\wee\w` ▶ t==rees== / ==bee4==

### 8. Sentence Capitalization

- `String.slice()`
- `for(;;)`

### 9. Printing Steps

| Solutions  |  Big O |
|---|---|
| table | O(n^2) |
| Recursions | O(n^2) |
| `Array.push()` + `Array.join()`| O(n) |

> 💡 recursion 문제 tip
>
> - pseudo code solution을 작성하며 연습하기
> - base case를 먼저 생각하기(recursion이 멈추는 조건)
> - 셀프호출 시 return 하지 않으면 무한 loop
>
### 10. Two Sided Steps - Pyramids

| Solutions  |  Big O |
|---|---|
| table | O(n^2) |
| recursion | O(n^2) |
| concatenating| O(n^2) |

### 11. Find The Vowels

| Solutions  |  Big O |
|---|---|
| `Array.includes()` | O(n) |
| `buildCharMap()` | O(n) |
| `String.match()` | O(n) |

- string보다 array 사용(string은 multiple character 체크 불가)

> 💡 Regular Expressions
>
> - `[]`: match several characters
>   - ex) `gr[ea]y` ▶ ==gray== / ==grey==

> 📝 `String.prototype.match()`
> : The match() method retrieves the result of matching a string against a regular expression.>
>
>    ```ts
>    match(regexp: RegExp): RegExpMatchArray | null;
>    ```

### 12. Enter the Matrix Spiral

| Solutions  |  Big O |
|---|---|
| spiral row + col | O(n^2) |

### 13. Fibonacci

| Solutions  |  Big O |
|---|---|
| Dynamic Programming | O(n) |
| Recursions | O(n^2) |
| Recursions with memoization 1 | O(n) |
| Recursions with memoization 2 | O(n) |
| Generators | O(n) |

> 📝 Dynamic Programming
> : a technique used in computer science to solve problems by breaking them down into smaller, simpler subproblems, and solving each subproblem only once. The solutions to the subproblems are then stored in memory so that they can be reused when necessary, avoiding redundant computations and improving efficiency.
>
- Recursions

![recursions](assets/fib-recursions--01.jpg)

- Recursion with memoization 1

![recursions](assets/fib-recursions--02.jpg)
![recursions](assets/fib-recursions--03.jpg)

- update values by destructuring assignment with arrays

```js
[x, y] = [y, x + y]; 
⏸
const newX = y
const newY = x + y
x = newX
y = newY
```

### 14. Weaving two queues

| Solutions  |  Big O | |
|---|---|---|
| `while`| O(n) | n: the total number of elements in both sourceOne and sourceTwo|

- Queue 구현(둘다 맞으나 ➡이 보편적인 듯?)
  - insert 방향 ➡ : `Array.unshift()` and `Array.pop()`
  - insert 방향 ⬅ : `Array.push()` and `Array.shift()`

#### Queue

| Solutions  |  Big O
|---|---|
| `add`| `Array.unshift()`: O(n), `Array.push()`: O(1) |
| `remove`|`Array.pop()`: O(1), `Array.shift()`: O(n) |
| `peek`| O(1) |

### 15. Queue from Stack

| Solutions  |  Big O
|---|---|
| `add`| O(1) |
| `remove`| O(n) |
| `peek`| O(n) |

#### Stack

| Solutions  |  Big O
|---|---|
| `push`| O(1) |
| `pop`| O(1) |
| `peek`| O(1) |

### 16. Linked List

- index = 0 : `this.head`

> 💡 `null` vs `undefined`
>
> - index에 해당하는 node가 없을 경우 return 값
>   - `LinkedList.getAt(index)`: `null` (값을 요청함 👉 값이 없다)
>   - `LinkedList.removeAt(index)`: `undefined` (액션을 요청함 👉 아무 것도 하지 않았다)

### 17. Find the Midpoint

### 18. Circular Lists

### 19. Step Back From the Tail

### 20. Tree

- node를 추가/삭제하는 method를 data structure에  적용하는 것이 아니라 그 안에 node에 적용함
  - linked list와 달리  node를 추가/삭제할 때 어떤 node에 적용해야하는지 정해줘야 하기 때문

- `traverseBF(fn)`: parent node를 children node로 치환하여 뒤에 붙이고 parent node를 처리하는 방식(Queue)
- `traverseDF(fn)`: parent node를 children  node로 치환하여 앞에 붙이고 parent node를 처리하는 방식(Stack)

### 21. Tree Width with Level Width

### 22. Binary Search Trees

- search 할 때는 빠르고 CRUD할 때는 오래 걸리는 것이 database의 index 기능과 비슷
- 좌우 children에 크기 제한 없으면 그냥 Binary Tree
