const inputList = [-5, 5, 2, 9, 1, 31];

let smallestSoFar = inputList[0];
let largestSoFar = inputList[0];

// Only go over the list once
for (const curElement of inputList) {
    if (curElement < smallestSoFar) {
        smallestSoFar = curElement;
    } 
    
    if (curElement > largestSoFar) {
        largestSoFar = curElement;
    }
}

console.log(`The smallest element is ${smallestSoFar}`);
console.log(`The largest element is ${largestSoFar}`);




// Goal: Print out the smallest number in the list
// Keep track of the smallest number so far
// Go through the whole list
// For each number
//      Compare to see if it's smaller than the smallest so far
//         If so, that number is now the smallest