// A number is called a "perfect" number
// if it is equal to the sum of all its divisors
// (other than itself)

// For example, 6 is divisible by 1, 2, and 3.
// 1 + 2 + 3 = 6.

// 28 is divisible by 1, 2, 4, 7, and 14
// 1 + 2 + 4 + 7 + 14 = 28

// 10 is divisible 1, 2, and 5
// 1 + 2 + 5 != 10

// Write a function to calculate whether or not
// a given number is a perfect number and return true/false

// Pseudocode



function isPerfect(num) {
    let total = 0; // Create a variable to add them up

    // Loop through all the numbers less than the input
    for(let factor = 1; factor < num; factor++) {
        // Check if each of them is a factor with the % operator
        if (num % factor == 0) { // This IS a factor
            total += factor;
        }
    }

    // See if the total matches with the original number
    /*if(total === num) { // The number is perfect
        return true;
    } else { // The number is not perfect
        return false;
    }*/
    return total === num;
}
console.log(isPerfect(8128)); // Perfect
console.log(isPerfect(30)); // Not perfect