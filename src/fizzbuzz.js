Object.defineProperty(exports, '__esModule', { value: true });
function fizzbuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}
exports.default = fizzbuzz;
const print = (num) => {
  for (let i = 0; i < num; i += 1) {
    // eslint-disable-next-line no-console
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};
exports.print = print;
(0, exports.print)(40);
module.exports = fizzbuzz;
