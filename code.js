// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (isNaN(input) && typeof input === 'string') {
        return `Hello, ${input}!`;
    } else {
        return 'Hello, World!';
    }
}

// isFive function
function isFive(number){
    number = parseFloat(number);
    return number === 5;
}

// Function isEven
function isEven(coolNumber){
    return coolNumber % 2 === 0;
}

console.log(typeof isEven());