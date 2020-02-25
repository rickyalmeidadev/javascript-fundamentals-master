//! READ: http://learn.ironhack.com/#/learning_unit/8206

//***************** EXAMPLE ************ //
// for(initiation; condition to keep loop; incrementer) {
//   statement
// }

// ************* PRATICE ************** //
//! Print numbers 0 to 100

// code here
for (let i = 0; i <= 100; i += 1) {
    console.log(i);
}

// ######################################### //

//! Print only even numbers from 0 to 100

// code here
for (let i = 0; i <= 100; i += 1) {
    if (i % 2 === 0) console.log(i);
}

// ######################################### //

//! Print only odd numbers from 0 to 100

// code here

for (let i = 0; i <= 100; i += 1) {
    if (i % 2 === 1) console.log(i);
}

// ######################################### //

//! Print numbers 80 to 20

// code here
for (let i = 80; i >= 20; i -= 1) {
    console.log(i);
}

// ######################################### //

//! Write an array called arrEx2 with length 3.

// code here
let arrEx2 = [1, 2, 3];
console.log(arrEx2.length);

// ######################################### //

//! Write a loop using for structure that prints all positive numbers until 48 (including 48).

// code here
for (let i = 0; i <= 48; i += 1) {
    console.log(i);
}

// ######################################### //

//! Write a loop using for structure that prints all negative numbers until -30 (excluding).

// code here
for (let i = -1; i > -30; i -= 1) {
    console.log(i);
}

// ######################################### //

//! Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

// code here
for (let i = 102; i >= 32; i -= 2) {
    console.log(i);
}

// ######################################### //

const pets = [
    "dog",
    "cat",
    "bird",
    "salamander",
    "human",
    "ape",
    "alien",
    "dinossaur"
];
// Use FOR Loop to print the content of array "pets"
for (let i = 0, size = pets.length; i < size; i += 1) {
    console.log(pets[i]);
}

//! Use FOR EACH to print the content of array "pets"
pets.forEach(pet => console.log(pet));

const array = [1, "x", 3, 8, "x", 5, 7, 3, "x", 2, 6, "x", 10];
// Use FOR to count and print how many times the letter x appears in the array
let total = 0;
for (let i = 0, size = array.length; i < size; i += 1) {
    if (array[i] === "x") total += 1;
}
console.log(total);

//! Use FOR EACH to count and print how many times the letter x appears in the array
total = 0;
array.forEach(element => {
    if (element === "x") total += 1;
});

console.log(total);

const numbers = [1, 5, 6, 8, 12, 25, 65, 78];
//! Use FOR to calculate and print the sum of all numbers in the array
let sum = 0;
for (let i = 0, size = numbers.length; i < size; i += 1) {
    sum += numbers[i];
}

console.log(sum);

//! Use FOR EACH to calculate and print the sum of all numbers in the array
sum = 0;
numbers.forEach(element => (sum += element));
console.log(sum);

const sentence = "Hack your life";
//! Use FOR to print each letter of the sentence on a different line.
for (let i = 0, size = sentence.length; i < size; i += 1) {
    console.log(sentence[i]);
}

//! Use FOR EACH to print each letter of the sentence on a different line.
sentence.split("").forEach((element, i) => console.log(element));
