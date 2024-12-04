import drop from '../drop.js'

describe('drop.js', () => {
    test('Should drop the first number from array', () => {
        expect(drop([1, 2, 3])).toEqual([2, 3]);
      });
      
      test('Should drop two first numbers from array', () => {
        expect(drop([1, 2, 3], 2)).toEqual([3]);
      });
      
    test('Should not drop anything from array', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
      });

    test('Should return empty array, when drop value is more than there is numbers', () => {
        expect(drop([1, 2, 3], 5)).toEqual([]);
      });

    test('Should return same array, when drop value is negative', () => {
        expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
      });
})