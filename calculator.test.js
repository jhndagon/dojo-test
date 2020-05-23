const calc = require('./calculator');

describe('add operation', () => {
    test('test add 1 + 2 to equal 3', () => {
        var value = calc.add(1,2);
    
        expect(value).toBe(3);
    });
    
    test('test add 5 + 5 to equal 10', () => {
        var value = calc.add(5,5);
    
        expect(value).toBe(10);
    });
});


describe('subtract operation', () => {

    
    test('test subtract 5 - 5 to equal 0', () => {
        var value = calc.subtract(5,5);
    
        expect(value).toBe(0);
    });
    
    test('test subtract 5 - 3 to equal 2', () => {
        var value = calc.subtract(5,3);
    
        expect(value).toBe(2);
    });
});