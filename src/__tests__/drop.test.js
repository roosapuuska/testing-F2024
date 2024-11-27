import drop from '../drop.js'

describe('drop.js', () => {
    test('Drop the first number from array', () => {
        expect(drop([1, 2, 3])).toEqual([2, 3]);
      });
      
      test('Drop two first numbers from array', () => {
        expect(drop([1, 2, 3], 2)).toEqual([3]);
      });
      
    test('Do not drop anything from array', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
      });

    test('Drop more than there is numbers in array', () => {
        expect(drop([1, 2, 3], 5)).toEqual([]);
      });

})