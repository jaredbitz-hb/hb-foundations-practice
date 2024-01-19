/* Problem: Triangle

Goal: Write a function that takes in a number called
"size". Print out a triangle with that size.

size: 5


      *
     **
    ***
   ****
  *****
*/
function printTriangle(size) {
    // i = number of the row
    for(let i = 0; i < size; i += 1) {

        let row = "";
        for(let j = 0; j < size - i - 1; j+= 1) {
            row += " ";
        }
        for(let j = 0; j < i + 1; j += 1) {
            row += '*';
        }

        console.log(row); // Each console.log() is new line
    }
}
printTriangle(5);