//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx1 = [2, 4, 6, 7, 9, 12];

const add2 = arr => arr.map(item => item + 2);

// console.log(add2(arrEx1));


// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx2 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
];

const checkSum = arr => {
    return arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";
};

// console.log(checkSum(arrEx2));

// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr => arr.filter(num => num % 2 === 0);

// console.log(evenNumbers(arrEx3));

// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx4 = ["a", "c", "g", "r", "w", "e", "s", "l", "z", "q", "b", "d"];

const sortLetters = arr => arr.sort();

// console.log(sortLetters(arrEx4));

// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 5.

const multiplyBy5 = num => num * 5;

// console.log(multiplyBy5(5))

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 5.

arrEx3.map(number => console.log(multiplyBy5(number)));

// ######################################### //

//! Make a function that takes a letter and returns it uppercase

const letterToUpperCase = letter => letter.toUpperCase();

// console.log(letterToUpperCase("b"))

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements upper case of an array.

arrEx4.map(letter => console.log(letterToUpperCase(letter)));

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even

const isOdd = number => (number % 2 !== 0 ? true : false);

// console.log(isOdd(3));

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

console.log(arrEx3.filter(number => isOdd(number)))

// ######################################### //

//! Using any array method, make a loop that return the result of multiplying all the elements.

console.log(arrEx3.reduce((acc, cur) => acc * cur, 1));

// ######################################### //
