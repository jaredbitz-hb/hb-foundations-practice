// Problem: Smallest Difference

// Write a function that takes in two arrays:

// [10, 20, 14, 16, 18]

// [30, 23, 54, 33, 2]

// Answer: 3

// Calculate the smallest number (in absolute value) 
// we can get by subtracting some
// number from array 1 and some number from array 2

// Take 5 minutes to think about how you would write this code

function smallestDifference(arr1, arr2) {
    // Create a variable to remember the smallest so far
    let smallestSoFar = null; // EMPTY

    // Loop over one array one by one
    for(let i = 0; i < arr1.length; i += 1) {
        // Loop that through every element of array 2
        for(let j = 0; j < arr2.length; j += 1) {
            // calculate abs(num1 - num2)
            const difference = Math.abs(arr1[i] - arr2[j]);
            if (smallestSoFar === null || difference < smallestSoFar) {
                smallestSoFar = difference;
            }
        }
    }

    return smallestSoFar;
}
let arr1 = [10, 20, 14, 16, 18];
let arr2 = [30, 23, 54, 33, 2]
console.log(smallestDifference(arr1, arr2));