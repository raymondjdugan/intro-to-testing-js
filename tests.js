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
    it('should return false when undefined', function () {
        expect(isEven()).toBe(false);
    });
});