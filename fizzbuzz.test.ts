const fizzbuzz = require('./fizzbuzz.ts');

describe('fizzbuzz', () => {
  test('test is run', () => {
    expect(true).toBe(true);
  });
  test('input 1 return 1', () => {
    const expected = fizzbuzz(1);
    const returned = 1;
    expect(expected).toBe(returned);
  });
});
