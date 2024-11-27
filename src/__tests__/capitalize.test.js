import capitalize from '../capitalize.js'

describe('capitalized.js', () => {
    test('Make first letter upper case', () => {
        expect(capitalize('fred')).toBe('Fred');
      });
    
    test('If first case is already upper case, return same', () => {
        expect(capitalize('Fred')).toBe('Fred');
    });

    test('If whole word is upper case', () => {
        expect(capitalize('FRED')).toBe('Fred');
    })

    test('Change only first letter in sentence', () => {
        expect(capitalize('hello fred')).toBe('Hello fred');
    })

    test('Work when only one character is given', () => {
        expect(capitalize('f')).toBe('F');
    })

    test('Return empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    test('Do not change anything if first character is special', () => {
        expect(capitalize('!fred')).toBe('!fred');
    })

    test('Return empty string when nothing is given', () => {
        expect(capitalize()).toBe('');
    })
})