import get from '../get.js'

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('get.js', () => {
    test('--', () => {
      expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test('--', () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
      });
    
      test('--', () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default');
      });

})