import {capitalize,
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray    
    } from '../src/functions';

describe('Capitalize function',()=>{
    test('Capitalize function capitalizes the first character of a string',()=>{
        expect(capitalize('hello')).toBe('Hello');
    });
    
    test('Capitalize handles empty string',()=>{
        expect(capitalize('')).toBe('');
    });
    
    test('Capitalize handles single character',()=>{
        expect(capitalize('a')).toBe('A');
    });
});

describe('reverseString Function',()=>{
    test('reverse a standard string',()=>{
        expect(reverseString('hello')).toBe('olleh');
    });

    test('reverse a string with spaces',()=>{
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('reverse an empty string',()=>{
        expect(reverseString('')).toBe('');
    });

    test('reverse a single character',()=>{
        expect(reverseString('a')).toBe('a');
    });

    test('reverse a string with special characters',()=>{
        expect(reverseString('123!@#')).toBe('#@!321');
    });
});

describe('Calculator object',()=>{
    test('adds two number',()=>{
        expect(calculator.add(2,3)).toBe(5);
    });

    test('Subtract two number',()=>{
        expect(calculator.subtract(5,2)).toBe(3);
    });

    test('Multiply two number',()=>{
        expect(calculator.multiply(5,6)).toBe(30);
    });

    test('Divide two Number',()=>{
        expect(calculator.divide(12,4)).toBe(3);
    });

    test('Throw error when divided by 0',()=>{
        expect(()=>calculator.divide(6,0)).toThrow('Cannot divide by zero');
    });

    test('handle negative number',()=>{
        expect(calculator.add(-2,-3)).toBe(-5);
        expect(calculator.subtract(-5,-3)).toBe(-2);
        expect(calculator.multiply(-4,-3)).toBe(12);
        expect(calculator.divide(-6,-3)).toBe(2);
    });

    test('handle floating-point number',()=>{
        expect(calculator.add(0.1,0.2)).toBeCloseTo(0.3);
        expect(calculator.divide(1,3)).toBeCloseTo(0.333);
    });
});

describe('caesarCipher function',()=>{
    test('shifts letters by the shift factor',()=>{
        expect(caesarCipher('abc',3)).toBe('def');
    });

    test('wrap from z to a',()=>{
        expect(caesarCipher('xyz',3)).toBe('abc');
    });

    test('preserve case',()=>{
        expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
    });

    test('ignore punctuation and spaces',()=>{
        expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
    });

    test('handle negative shifts',()=>{
        expect(caesarCipher('def',-3)).toBe('abc');
    });
});

describe('Analyze Array Function',()=>{
    test('return the correct Average',()=>{
        expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    });

    test('return the correct minimum',()=>{
        expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    });

    test('return the correct maximum',()=>{
        expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    });

    test('return the correct length',()=>{
        expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
    });
});
