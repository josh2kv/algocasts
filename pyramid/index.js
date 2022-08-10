// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  /**
   * mine
   */
  for (let i = 1; i <= n; i++) {
    const numPound = 2 * i - 1;
    const numWhiteSpace = n - i;

    let pound = '';
    let whiteSpace = '';

    for (let j = 1; j <= numPound; j++) {
      pound += '#';
    }

    for (let j = 1; j <= numWhiteSpace; j++) {
      whiteSpace += ' ';
    }

    console.log(`${whiteSpace}${pound}${whiteSpace}`);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   const length = 2 * n - 1;
//   const midPoint = Math.floor(length / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < length; col++) {
//       if (col >= midPoint - row && col <= midPoint + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// function pyramid(n, row = 0, level = '') {
//   const length = 2 * n - 1;
//   const midpoint = Math.floor(length / 2);

//   if (row === n) return;

//   if (level.length === length) {
//     console.log(level);

//     return pyramid(n, row + 1);
//   }

//   if (level.length >= midpoint - row && level.length <= midpoint + row) {
//     level += '#';
//   } else {
//     level += ' ';
//   }

//   pyramid(n, row, level);
// }
