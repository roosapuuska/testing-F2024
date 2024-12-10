import toString from '../toString.js'; 
import isSymbol from '../isSymbol.js'; 

jest.mock('../isSymbol', () => jest.fn());

describe('toString', () => {
  beforeEach(() => {
    isSymbol.mockReset();
  });

  test('converts null to an empty string', () => {
    expect(toString(null)).toBe('');
  });

  test('converts undefined to an empty string', () => {
    expect(toString(undefined)).toBe('');
  });

  test('converts a number to a string', () => {
    expect(toString(123)).toBe('123');
    expect(toString(-123)).toBe('-123');
  });

  test('preserves the sign of -0', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString(0)).toBe('0');
  });

  test('converts an array to a string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString(['a', 'b', 'c'])).toBe('a,b,c');
  });

  test('handles nested arrays correctly', () => {
    expect(toString([1, [2, [3]]])).toBe('1,2,3');
    expect(toString([[null], [undefined]])).toBe(',');
  });

  test('uses isSymbol to handle symbols', () => {
    const symbol = Symbol('test');
    isSymbol.mockReturnValueOnce(true);
    expect(toString(symbol)).toBe(symbol.toString());
    expect(isSymbol).toHaveBeenCalledWith(symbol);
  });

  test('returns "0" for non-negative zero', () => {
    expect(toString(0)).toBe('0');
  });

  test('handles non-primitive values by calling their toString', () => {
    const obj = { toString: () => 'object' };
    expect(toString(obj)).toBe('object');
  });

  test('handles values without a toString method gracefully', () => {
    const obj = Object.create(null); 
    expect(toString(obj)).toBe('[object Object]');
  });

  test('converts boolean values to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('converts symbols to strings using their toString method', () => {
    const symbol = Symbol('symbol');
    isSymbol.mockReturnValueOnce(true);
    expect(toString(symbol)).toBe(symbol.toString());
  });

  test('handles non-symbol values when isSymbol returns false', () => {
    isSymbol.mockReturnValueOnce(false);
    expect(toString(123)).toBe('123');
  });

  test('returns the correct string representation for Infinity and NaN', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
    expect(toString(NaN)).toBe('NaN');
  });
});
