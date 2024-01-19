



// Problem: Given a number n, write a function that 
// returns an array containing n unique random numbers 
// between 1-10, inclusive. (That is, do not repeat 
// any numbers in the returned list.)

// Plug in n = 4: [2, 7, 3, 1]
// Plug in n = 7: [8, 9, 2, 4, 5, 3, 7]

function generateRandomInteger(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}

function luckyNumbers(n) {
    // For loop that runs n times
        // Generate a random number
        // boolean to check if the new number is already
        // in the list
        // If it isn't: then add it and move on
        // While it's a repeat: generate another new number

    let randomNumbers = []; // Empty to start
    for(let i = 0; i < n; i += 1) { // Runs n times
        let nextNumber = generateRandomInteger(1, 10);
        
        while (randomNumbers.includes(nextNumber)) {
            nextNumber = generateRandomInteger(1, 10);
        }
        
        // add nextNumber to the randomNumbers array
        randomNumbers.push(nextNumber);
    }
    return randomNumbers;
}
console.log(luckyNumbers(5));