// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1. array.reverse()
// 2. for of
// 3. array.reduce()
function reverse(str) {
    return str.split("").reduce((acc, cur) => cur + acc, "");
}

module.exports = reverse;
