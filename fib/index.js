// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function memoize(fn) {
//   const cache = {};

//   function retrieveOrCalculate(...args) {
//     if (cache[args]) return cache[args];

//     // this로 retrieveOrCalculate의 this를, arguments로 retrieveOrCalculate의 args를 줘서 slowFib를 호출한다.
//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   }

//   return retrieveOrCalculate;
// }

// function slowFib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

// fib(6);

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

function fib(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 1) return f;
  }
}

module.exports = fib;

// // O(n^2)
// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// // O(n)
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }
