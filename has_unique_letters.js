// Unique letters

// Write a function that takes in a string as an input
// Determine whether all the letters in the string are
// DIFFERENT. If so, return true. Otherwise, return false.

// "habit" ---> true (all the letters are different)
// "moon" ----> false (two o's)
// "robot" ---> false (two o's)

// How would we approach this problem?

// Loop from start to end of the string - for ... of
function hasUniqueLetters(inputString) {
    // goal:
    // Loop through each character
    // Mark that character as "true" inside my object
    // If i see a character I've already seen before
    //  Return false

    let seen = {}; // Track characters I've seen so far
    for (const newChar of inputString) { // go through each char on its own
        if (seen[newChar] === true) { // if we've already seen it
            return false; // We're done - we've found a duplicate. NOT UNIQUE
        }
        seen[newChar] = true; // track it in our object. Mark it as seen
        console.log(seen); // not necessary (just for visualization)
    }
    // If I get past the whole for loop
    // without returning, then all the chars
    // must have been different
    return true;
}

const answer = hasUniqueLetters('habit');
console.log(answer);