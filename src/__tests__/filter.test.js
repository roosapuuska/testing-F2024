import filter from '../filter.js';

describe('filter', () => {
  test('filters array based on a predicate function', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test('returns an empty array when no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n > 10);
    expect(result).toEqual([]);
  });

  test('returns the full array if all elements match the predicate', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n > 0);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('handles null or undefined arrays', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test('handles invalid predicate gracefully', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, null); 
    expect(result).toEqual([]);
  });

  test('passes value, index, and array to the predicate', () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn(() => true);
    filter(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
  });

  test('returns elements that pass the predicate for array of primitives', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (n) => n % 2 === 0); 
    expect(result).toEqual([2, 4]);
  });

  test('does not modify the original array', () => {
    const numbers = [1, 2, 3, 4];
    const copy = [...numbers];
    filter(numbers, (n) => n % 2 === 0);
    expect(numbers).toEqual(copy); 
  });
});
