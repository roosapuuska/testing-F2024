import isEmpty from '../isEmpty.js'

describe('isEmpty.js', () => {
    test('Check empty value, should return true', () => {
        expect(isEmpty()).toBe(true);
      });

    test('Check null value, should return true', () => {
    expect(isEmpty(null)).toBe(true);
    });

    test('Check value 1, should return true', () => {
        expect(isEmpty(1)).toBe(true);
      });
    
    test('Check value true, should return true', () => {
    expect(isEmpty(true)).toBe(true);
    });

    test('Check empty value, should return true', () => {
        expect(isEmpty()).toBe(true);
    });

    test('Check array, should return false', () => {
        expect(isEmpty([1,2,3])).toBe(false);
    });

    test('Check string, should return false', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    test('Check map, should return false', () => {
        expect(isEmpty({'a' : 1})).toBe(false);
    });

    })
