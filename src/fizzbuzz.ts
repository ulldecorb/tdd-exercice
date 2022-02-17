export default function fizzbuzz(num: number): number | string {
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

export const print = (num: number) => {
  for (let i = 0; i < num; i += 1) {
    // eslint-disable-next-line no-console
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};

print(40);

module.exports = fizzbuzz;
