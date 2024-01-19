// Write a function to go through a list
// and determine if any two numbers in the
// list add up to 0. Return a boolean

// [1, 2, 3, 4]  => return false
// [1, 2, 3, -2]  => return true
// [-3, -1, 10, 3] => return true



// [-1, -2, -1, 2] => return true
//       ^                 
//  ^ 

// Look at the first element
    // go through REST of the array from beginning
    // look for the opposite of that num
    // if number is -2, look for +2
// Look at the second element
    // go through REST of the array from beginning
    // look for the opposite of that num

function checkForPairs(arrOfNums) {
    for (const firstNum of arrOfNums) { 
        for (const secondNum of arrOfNums) {
            console.log(firstNum, secondNum);
            if (firstNum + secondNum === 0) {
                console.log("Found a result!");
                return true; // Output true
            }
        }
    }
    // If I get to this point, then I've checked every
    // pair in the list, and NONE of them have worked
    return false; // Don't give up until the end
}

let answer = checkForPairs([-1, -2, -1, 3])
console.log(answer)

