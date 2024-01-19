// Unique Letters
// Write a function to perform this task on a string
// and return the result

// Input: a string like "ilovetocode"
// Output: that string, but with only one of each letter
// i l o v e t o c o d e
// i l o v e t X c X d X
// 0 1 2 3 4 5 6 7 8 9 10

function uniqueLetters(inputStr) {
    let result = '';
    for(let i = 0; i < inputStr.length; i+=1) {
        const unique = inputStr[i];
        // If we HAVE NOT seen this char yet
        if(!result.includes(unique)) { 
            // Add it to the string
            result += unique;
        }
    }
    return result;
}
console.log(uniqueLetters('ilovetocode'));

// return value: ilovetcd