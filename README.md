# The Coding Interview Bootcamp: Algorithms + Data Structures

Ace your next Javascript coding interview by mastering data structures and algorithms.

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
| recursion | O(n^2) |
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

### 12. Enter the Matrix Spiral

### 13. Fibonacci

### 14. Weaving two queues

### 15. Queue from Stack
