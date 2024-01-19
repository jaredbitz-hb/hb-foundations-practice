// Next perfect square

const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");

// Write a function that takes in a number and finds the "next perfect square"
// after that number.

// Perfect square: some number times itself
// Ex:  1  = 1 * 1
// Ex:  4  = 2 * 2
// Ex: 100 = 10 * 10

// Input 20
// Output 25 (The next perfect square that comes after 20)

// Input 54
// Output 64 (The next perfect square that comes after 54)

// Input 72
// Output 81  (= 9 * 9)

// Examples:
// To find the square root of a number:
// const result = Math.sqrt(81)
// console.log(result)

// const result2 = Math.sqrt(90)
// console.log(result2)

// // To remove the decimal
// const floor1 = Math.floor(4.2); // Gives 4
// console.log(floor1)

// const floor2 = Math.floor(4); // Gives 4
// console.log(floor2);

// // To round up:
// const ceil1 = Math.ceil(2.4)
// console.log(ceil1);

function nextSquareRoot(num) { // num = 16
    const squareRoot = Math.sqrt(num); // square root = 4
    const nextInteger = Math.floor(squareRoot) + 1; // nextInt = 5
    return nextInteger * nextInteger; // return 5 * 5
}

// The input IS a perfect square already
console.log(nextSquareRoot(16)); // Gives 25

// The input ISN'T a perfect square
console.log(nextSquareRoot(26)); // Gives 36