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

// isEven function
function isEven(coolNumber){
    if(!isNaN(coolNumber) && typeof coolNumber === 'number'){
        return coolNumber % 2 === 0;
    } else {
        return false;
    }

}

// Function isVowel
function isVowel(stringLikeInput){
    if(typeof stringLikeInput === 'string') {
      stringLikeInput = stringLikeInput.toLowerCase();
    }
    switch(stringLikeInput) {
        case 'a': case 'e': case 'i': case 'o': case 'u': case 'y':
            return true;
        default:
            return false;
    }
}

// add() function
function add(numX, numY) {
    numX = parseFloat(numX);
    numY = parseFloat(numY);
    return numX + numY;
}

