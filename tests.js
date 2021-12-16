// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for sayHello
describe('sayHello', function() {
    it('should be a defined function', function (){
       expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
       expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function (){
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!"', function (){
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!"', function (){
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when undefined', function (){
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when a boolean is passed', function (){
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when a number is passed', function (){
        expect(sayHello('5')).toBe('Hello, World!');
    });
});

// Unit tests for isFive
describe('isFive', function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if the param is equal to five', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if the param is a string and is equal to five', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false if the param is undefined', function () {
        expect(isFive()).toBe(false);
    });
    it('should return false if the param is null', function () {
        expect(isFive(null)).toBe(false);
    });
});

// Unit test for isEven
describe('isEven', function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when 2 is passed in', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed in', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when banana is passed in', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when 8 is passed in', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when Infinity is passed in', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when boolean', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when undefined', function () {
        expect(isEven()).toBe(false);
    });
});

// Unit test for isVowel
describe('isVowel', function (){
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when "a" is passed in', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when "A" is passed in', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return true when "y" is passed in', function () {
        expect(isVowel('y')).toBe(true);
    });
    it('should return false when a number is passed in', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when the boolean true is passed in', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when the boolean false is passed in', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when a string is passed in', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when undefined', function () {
        expect(isVowel()).toBe(false);
    });
});

// Unit test for
describe('add', function (){
    it('should return 5 when 2 and 3 are passed in', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when 33 and -9 are passed in', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should return 11 when string "5" and number 6 are passed in', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return NaN when a 2 string literals are passed in', function () {
        expect(add('banana', 'split')).toBeNaN();
    });
    it('should return NaN when a number and a string literal is passed in', function () {
        expect(add(2, 'apples')).toBeNaN();
    });
    it('should return NaN when undefined', function () {
        expect(add()).toBeNaN();
    });
});











