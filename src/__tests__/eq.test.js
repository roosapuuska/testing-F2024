import eq from '../eq.js'; 

describe('eq', () => {
  test('returns true for identical objects', () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
  });

  test('returns false for two different objects with the same structure', () => {
    const object1 = { a: 1 };
    const object2 = { a: 1 };
    expect(eq(object1, object2)).toBe(false);
  });

  test('returns true for identical primitive values', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
    expect(eq(true, true)).toBe(true);
  });

  test('returns false for primitive values with different types', () => {
    expect(eq('1', 1)).toBe(false);
    expect(eq(true, 1)).toBe(false);
  });

  test('returns true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test('returns false for primitive value and its object equivalent', () => {
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq(1, Object(1))).toBe(false);
    expect(eq(true, Object(true))).toBe(false);
  });

  test('returns true for both values being undefined', () => {
    expect(eq(undefined, undefined)).toBe(true);
  });

  test('returns true for both values being null', () => {
    expect(eq(null, null)).toBe(true);
  });

  test('returns false for null and undefined comparison', () => {
    expect(eq(null, undefined)).toBe(false);
  });

  test('returns true for 0 and -0 (SameValueZero comparison)', () => {
    expect(eq(0, -0)).toBe(true);
  });

  test('returns false for objects with different references', () => {
    const obj1 = {};
    const obj2 = {};
    expect(eq(obj1, obj2)).toBe(false);
  });

  test('returns false for arrays with the same elements but different references', () => {
    expect(eq([1, 2], [1, 2])).toBe(false);
  });
});
