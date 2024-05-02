// multiplication.test.js

const multiplication = require('./multiplication');

describe('multiplication function tests', () => {
  test('return a number', () => {
    expect(typeof multiplication(2, 3)).toBe('number');
  });

  test('multiply positive numbers', () => {
    expect(multiplication(2, 3)).toBe(6);
  });

  test('multiply negative numbers', () => {
    expect(multiplication(-2, 3)).toBe(-6);
  });

  test('when multiplying by zero', () => {
    expect(multiplication(0, 3)).toBe(0);
    expect(multiplication(2, 0)).toBe(0);
    expect(multiplication(0, 0)).toBe(0);
  });

  test('error for non number entries', () => {
    expect(() => multiplication('a', 3)).toThrow();
    expect(() => multiplication(2, 'b')).toThrow();
    expect(() => multiplication('a', 'b')).toThrow();
  });

  test('using non whole number entries', () => {
    expect(multiplication(2.5, 3)).toBe(7.5);
  });
});
