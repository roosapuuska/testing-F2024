import get from '../get.js'

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('get.js', () => {
    test('Should return the value at a specified path', () => {
      expect(get(object, 'a[0].b.c')).toBe(3);
      expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });
    
    test('Should return the default value when path does not exist', () => {
      expect(get(object, 'a.b.c', 'default')).toBe('default');
    });

})