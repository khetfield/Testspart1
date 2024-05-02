// concatOdds.test.js

const concatOdds = require('./concatOdds');

describe('concatOdds function tests', () => {
  test('return array', () => {
    expect(Array.isArray(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]))).toBe(true);
  });

  test('put odd numbers in ascending order', () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
  });

  test('control any empty arrays', () => {
    expect(concatOdds([], [])).toEqual([]);
    expect(concatOdds([2, 4, 6], [8, 10, 12])).toEqual([]);
    expect(concatOdds([3, 2, 1], [])).toEqual([1, 3]);
    expect(concatOdds([], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 9, 15]);
  });

  test('error for invalid input', () => {
    expect(() => concatOdds(["a", 2, 1], [9, "b", 1, 1, 4, 15, -1])).toThrow();
    expect(() => concatOdds([3, 2, 1], "test")).toThrow();
  });
});
