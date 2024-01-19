// Balanced Parentheses

// Write a function that takes in a string and returns true if
// the parentheses in the string are BALANCED. Otherwise, return false.

// BALANCED:
// "The person (Jared) went to the store"
// "Person A (Alice) and Person B (Bob)"
// "(  ()    )  () "



// UNBALANCED:
// ") abcd ("
// "  (  ()   "


// "  ()    )"


// How can you tell in code if parentheses are balanced or not?


//   ( )  ()  ( ( ) )


//Counter: 0
// trick: keep a counter (start at 0)
//  Each time we see a (: add 1
//  Each time we see a ): subtract 1
//  If the counter ever becomes negative,
//  immediately return false

// If parentheses are balanced, counter
// will end at 0

function isBalanced(inputStr) {
    let counter = 0;
    for(let i = 0; i < inputStr.length; i++) {
        const curChar = inputStr[i];
        if (curChar === '(') {
            counter += 1;
        } else if (curChar === ')') {
            counter -= 1;
        }

        if(counter < 0) { // We found too many )'s early
            return false;
        }
    }
    if (counter === 0) { // We had an equal number
        return true;
    } else { // Unbalanced number
        return false;
    }
}