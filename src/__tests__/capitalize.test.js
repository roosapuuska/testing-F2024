import capitalize from '../capitalize.js'

describe('capitalized.js', () => {
    test('Should make first letter upper case', () => {
        expect(capitalize('fred')).toBe('Fred');
      });
    
    test('Should return same value', () => {
        expect(capitalize('Fred')).toBe('Fred');
    });

    test('Should return only first letter upper case', () => {
        expect(capitalize('FRED')).toBe('Fred');
    })

    test('Should change only first letter in sentence', () => {
        expect(capitalize('hello fred')).toBe('Hello fred');
        expect(capitalize('well hello fred')).toBe('Well hello fred');
    })

    test('Should work when only one character is given', () => {
        expect(capitalize('f')).toBe('F');
    })

    test('Should return empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    test('Should not change anything if first character is special', () => {
        expect(capitalize('!fred')).toBe('!fred');
        expect(capitalize('1fred')).toBe('1fred');
    })

    test('Should return empty string when nothing is given', () => {
        expect(capitalize()).toBe('');
    })
})