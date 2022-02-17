const fizzbuzz = require('./fizzbuzz.ts');

describe('fizzbuzz', () => {
  test('test is run', () => {
    expect(true).toBe(true);
  });
  test('input 1 return 1', () => {
    const expected = fizzbuzz(1);
    const result = 1;
    expect(expected).toBe(result);
  });
  test('print fizz when input 3', () => {
    const expected = fizzbuzz(3);
    const result = 'fizz';
    expect(expected).toBe(result);
  });
  test('return buzz when input 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });
  test('return fizz when input multiple of 3', () => {
    const expected = fizzbuzz(6);
    const result = 'fizz';
    expect(expected).toBe(result);
  });
  test('return fizz when input multiple of 5', () => {
    const expected = fizzbuzz(10);
    const result = 'buzz';
    expect(expected).toBe(result);
  });
  test('return fizzbuzz when input multiple of 3 and 5', () => {
    const expected = fizzbuzz(15);
    const result = 'fizzbuzz';
    expect(expected).toBe(result);
  });
});
