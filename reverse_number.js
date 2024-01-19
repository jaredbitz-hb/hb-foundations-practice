// Goal: write a function that reverses a number
// Remember that the input and the return value
// should have a type of Number

// 123 -> 321
// 5143 -> 3415
// 4 -> 4

// Convert numbers into an array --> reverse
// to convert a string to a number: Number("123");

function reverseNumber(num) {
    num = String(num); // Turn num into a string
    const numArray = [];
    for(const digit of num) {
        numArray.push(digit);
    }
    numArray.reverse();
    
    let reversedString = "";
    for(const digit of numArray) {
        reversedString += digit;
    }
    return Number(reversedString);
}

// Fancy version
function reverseNumber2(num) {
    num = String(num);
    // "1234" -> ["1", "2", "3", "4"]
    const numArray = num.split(''); // splits every char
    numArray.reverse();
    const reversedString = numArray.join('');
    return Number(reversedString);
}
