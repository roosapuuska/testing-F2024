import ceil from '../ceil.js'; 

describe('ceil', () => {
  test('rounds up a decimal number to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('rounds up with specified precision (2 decimal places)', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test('rounds up with negative precision (-2)', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  test('returns the same number if it is already an integer', () => {
    expect(ceil(5)).toBe(5);
  });

  test('works with negative numbers', () => {
    expect(ceil(-4.006)).toBe(-4);
    expect(ceil(-6.004, 2)).toBe(-6.00);
  });

  test('handles zero precision by default', () => {
    expect(ceil(4.8)).toBe(5);
    expect(ceil(-4.8)).toBe(-4);
  });

  test('rounds up to nearest integer if precision is 0', () => {
    expect(ceil(7.4, 0)).toBe(8);
  });

  test('handles edge cases for precision and numbers', () => {
    expect(ceil(0)).toBe(0); 
    expect(ceil(Number.MIN_VALUE)).toBe(1); 
    expect(ceil(Number.MAX_VALUE, -300)).toBe(Number.MAX_VALUE); 
  });

  test('returns NaN for invalid inputs', () => {
    expect(ceil('string')).toBeNaN();
    expect(ceil(undefined)).toBeNaN();
    expect(ceil(null)).toBeNaN();
  });
});