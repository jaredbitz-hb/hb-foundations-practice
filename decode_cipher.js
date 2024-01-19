// Problem: Decode

// Write a function that takes in 2 parameters:
// 1) A number `offset`
// 2) A string `message`

// For each letter in the message, move it "forward" in
// the alphabet by `offset` number of spaces

// Offset: 2  Message: "fcjjm"
                    // "hello"


function decode(offset, message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newWord = '';
    for(let i = 0; i < message.length; i++) {
        const curLetter = message[i];
        const letterIndex = alphabet.indexOf(curLetter);
        const newLetter = alphabet[(letterIndex + offset) % 26];
        newWord += newLetter;
    }
    return newWord;
}
console.log(decode(1, 'hal'));
