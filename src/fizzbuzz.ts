export default function fizzbuzz(num: number): number | string {
  // eslint-disable-next-line max-len
  const checkDivisible : Function = (divisible: number, number: number): boolean => number % divisible === 0;

  if (checkDivisible(3, num) && checkDivisible(5, num)) {
    return 'fizzbuzz';
  }
  if (checkDivisible(3, num)) {
    return 'fizz';
  }
  if (checkDivisible(5, num)) {
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
