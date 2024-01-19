// hasMoreVowels

// Write a function that takes in a string called "word"
// return true if that word has more vowels than consonants

// "queueing" (5 vowels, 3 consonants) -> return true
// "mirth" (1 vowel, 4 consonants) -> return false
// "food" (2 vowels, 2 consonants) -> return false

// vowels are AEIOU (won't care about y)

function hasMoreVowels(word) {
    // make a variable to list all vowels - do we have to do each one?
    word = word.toLowerCase(); // make sure the word is lowercase first
    const vowels = 'aeiou';
    let numVowels = 0; // value will change as we go through word
    let numConsonants = 0;

    // for loop to run through the word looking for vowels
    for(const char of word) { // 'char' will go through each individ. letter
        if(vowels.includes(char)) { // This char IS a vowel
            numVowels += 1;
        } else { // This char is a consonant (NOT a vowel)
            numConsonants += 1;
        }
    }
    console.log('Num vowels', numVowels);
    console.log('Num consonants', numConsonants);
    // if (numVowels > numConsonants) {
    //     return true;
    // } else {
    //     return false;
    // }
    return numVowels > numConsonants;
}

console.log(hasMoreVowels('Ebook'));
