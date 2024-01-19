// Write a function that goes through an array and checks if it contains every number from 1 - 10.
// Repeats are allowed

// [1, 2, 3, 8, 10] => False
// [2, 4, 6, 8, 10, 1, 3, 5, 7, 9] => True


function containsAll10(inputArray) {
    counts = {}; // At the end: {1: 50, 2: 30, 3: 17, ...}

    // Idea: Build up an object to count how many times I see each value
    for(let i = 0; i < inputArray.length; i++) {
        const currentNum = inputArray[i]; // Pull the current number out of the array
        // If I've seen this number already in a previous loop:
        if (currentNum in counts) {
            counts[currentNum] += 1;
        } else { // If I haven't seen this number yet
            counts[currentNum] = 1;
        }
    }
    // Check each number 1-10 and see if it's in the counts object
    for(let searchNumber = 1; searchNumber <= 10; searchNumber++) {
        if (searchNumber in counts) {
            // Don't do anything
        } else { // Didn't find this number at all!
            return false;
        }
    }
    return true; // Only get here if I see at least one of each number 1 - 10
}

// Simpler way
function containsAll10Version2(numberArray) {
    for(let searchNumber = 1; searchNumber <= 10; searchNumber++) {
        if (numberArray.includes(searchNumber)) { // Automatically search the array
            // Don't do anything - passed the check
        } else { // The number is not in the array!
            return false;
        }
    }
    return true; // Made it all the way to the end without failing any checks!
}

console.log(containsAll10Version2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));