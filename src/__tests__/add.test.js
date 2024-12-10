import add from "../add.js";


describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(6, 4)).toBe(10);
    });
  
    test('adds a positive number and zero', () => {
      expect(add(6, 0)).toBe(6);
    });
  
    test('adds zero and a positive number', () => {
      expect(add(0, 4)).toBe(4);
    });
  
    test('adds two negative numbers', () => {
      expect(add(-6, -4)).toBe(-10);
    });
  
    test('adds a negative and a positive number', () => {
      expect(add(-6, 4)).toBe(-2);
    });
  
    test('adds floating-point numbers', () => {
      expect(add(1.1, 2.2)).toBeCloseTo(3.3); 
    });
  
    test('returns 0 when no arguments are passed', () => {
      expect(add()).toBe(0); 
    });
  
    test('returns the single number if one argument is passed', () => {
      expect(add(6)).toBe(6);
    });
  });