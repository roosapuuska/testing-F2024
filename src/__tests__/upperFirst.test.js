import upperFirst from '../upperFirst'

describe('upperFirst.js', () => {
    test('Make first letter upper case', () => {
        expect(upperFirst('fred')).toBe('Fred');
      });
    
    test('If first case is already upper case, return same', () => {
        expect(upperFirst('Fred')).toBe('Fred');
        expect(upperFirst('Hello')).toBe('Hello');
    });

    test('If whole word is upper case', () => {
        expect(upperFirst('FRED')).toBe('FRED');
    })

    test('Change only first letter in sentence', () => {
        expect(upperFirst('hello fred')).toBe('Hello fred');
    })

    test('Work when only one character is given', () => {
        expect(upperFirst('f')).toBe('F');
    })

    test('Return empty string if input is empty', () => {
        expect(upperFirst('')).toBe('');
    });

    test('Do not change anything if first character is special', () => {
        expect(upperFirst('!fred')).toBe('!fred');
        expect(upperFirst('1fred')).toBe('1fred');
    })

    test('Return empty string when nothing is given', () => {
        expect(upperFirst()).toBe('');
    })
})