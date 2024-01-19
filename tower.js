// Problem: Build a tower

// Write a function that takes in a number "levels"
// Return an array of strings representing a "tower" with that many levels:

// levels = 3
/* [
    '  *  ',
    ' *** ',
    '*****'
   ]
   (All three strings are the same length)

   levels = 6
   [
    '     *     ',

    '    ***    ',

    '   *****   ',

    '  *******  ',

    ' ********* ',
    
    '***********'
   ]
*/

function makeTower(levels) {
    let numStars = 1;
    let numSpaces = levels - 1;
    let result = [];
    for (let i = 0; i < levels; i++) { // Run once for each level
        let row = ''; // Start out with nothing in the row
        for (let j = 0; j < numSpaces; j++) { // First spaces
            row += ' ';
        }
        for (let j = 0; j < numStars; j++) { // Then asterisks
            row += '*';
        }
        for (let j = 0; j < numSpaces; j++) { // Second set of spaces
            row += ' ';
        }
        result.push(row);
        // change numStars and numSpaces for the next time around
        numStars += 2; // Increase by two
        numSpaces -= 1; // Decrease by 1
    }
    return result;
}
console.log(makeTower(6));