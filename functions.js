//*********************************** EXAMPLE ***********************************//
//! adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
//*** ES5 ***//
function addTwo(number) {
    const result = number + 2;
    return result;
}
// OR
function addTwo(number) {
    return number + 2;
}
//*** ES6 ***//
const addTwo = number => {
    const result = number + 2;
    return result;
};
// OR
const addTwo = number => number + 2;

//*********************************** PRACTICE ***********************************//

//! adds the two inputted numbers together
// ex: add(5, 10); -> 15
//*** ES5 ***//
function add(num1, num2) {
    return num1 + num2;
}
//*** ES6 ***//
const add = (num1, num2) => num1 + num2;

//--------------------------------------------------------------------------------//
//! adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
//*** ES5 ***//
function addd(value1, value2, value3) {
    return value1 + value2 + value3;
}
//*** ES6 ***//
const addd = (value1, value2, value3) => value1 + value2 + value3;

//--------------------------------------------------------------------------------//
//! subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
//*** ES5 ***//
function subtract(n1, n2) {
    return n1 - n2;
}
//*** ES6 ***//
const subtract = (n1, n2) => n1 - n2;

//--------------------------------------------------------------------------------//
//! multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
//*** ES5 ***//
function multiplyByTwo(numero) {
    return numero * 2;
}
//*** ES6 ***//
const multiplyByTwo = numero => numero * 2;

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
    return val1 * val2;
}
//*** ES6 ***//
const multiply = (val1, val2) => val1 * val2;

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
    return a * b * c;
}
//*** ES6 ***//
const multiplyy = (a, b, c) => a * b * c;

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
    return value ** 2;
}
//*** ES6 ***//
const square = value => value ** 2;

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! determines if the number is odd
//! outputs true if the number is odd
//! outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd(num) {
    return num % 2 === 1 ? true : false;
}
//*** ES6 ***//
const isOdd = num => (num % 2 === 1 ? true : false);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! determines if the number is negative
//! outputs true if the number is negative
//! outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
    return num < 0 ? true : false;
}
//*** ES6 ***//
const isNegative = num => (num < 0 ? true : false);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
    return num < 0 ? num * -1 : num;
}
//*** ES6 ***//
const positive = num => (num < 0 ? num * -1 : num);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
    return typeof value === "number" ? true : false;
}
//*** ES6 ***//
const isNumber = value => (typeof value === "number" ? true : false);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
    return Array.isArray(value);
}
//*** ES6 ***//
const isArray = value => Array.isArray(value);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}
//*** ES6 ***//
const isObject = value => {
    return typeof value === "object" && !Array.isArray(value) ? true : false;
};

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
    return value === null ? true : false;
}
//*** ES6 ***//
const isNull = value => (value === null ? true : false);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! this function accepts an array of numbers
//! and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
    return array.filter(num => num % 2 === 1);
}
//*** ES6 ***//
const returnOdds = array => array.filter(num => num % 2 === 1);

//--------------------------------------------------------------------------------//
//*** ES5 ***//

//! this function accepts an array of numbers
//! and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    return array.filter(num => num % 2 === 0);
}
//*** ES6 ***//
const returnEvens = array => array.filter(num => num % 2 === 0);

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
    let maxElement = 0;
    array.forEach(num => {
        if (num > maxElement) maxElement = num;
    });
    return maxElement;
}
//*** ES6 ***//
const findMax = array => {
    let maxElement = 0;
    array.forEach(num => {
        if (num > maxElement) maxElement = num;
    });
    return maxElement;
};

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! remove leading and trailing whitespace or specified characters from string
// trim(' hello '); -> 'hello'
function trim(string) {
    return string.trim();
}
//*** ES6 ***//
const trim = string => string.trim();

//--------------------------------------------------------------------------------//
