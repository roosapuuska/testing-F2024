import upperFirst from '../upperFirst'

describe('upperFirst.js', () => {
    test('Should make first letter upper case', () => {
        expect(upperFirst('fred')).toBe('Fred');
      });
    
    test('If first case is already upper case, should return same', () => {
        expect(upperFirst('Fred')).toBe('Fred');
        expect(upperFirst('Hello')).toBe('Hello');
    });

    test('If whole word is upper case, should return same', () => {
        expect(upperFirst('FRED')).toBe('FRED');
    })

    test('Should change only first letter in sentence', () => {
        expect(upperFirst('hello fred')).toBe('Hello fred');
        expect(upperFirst('well hello fred')).toBe('Well hello fred');
    })

    test('Should work when only one character is given', () => {
        expect(upperFirst('f')).toBe('F');
    })

    test('Should return empty string if input is empty', () => {
        expect(upperFirst('')).toBe('');
    });

    test('Should not change anything if first character is special', () => {
        expect(upperFirst('!fred')).toBe('!fred');
        expect(upperFirst('1fred')).toBe('1fred');
        expect(upperFirst('!?hello')).toBe('!?hello');
    })

    test('Should not work, when input is not string', () => {
        expect(upperFirst(1.23)).toBe(1.23);
        expect(upperFirst(12)).toBe(12);
    })
})