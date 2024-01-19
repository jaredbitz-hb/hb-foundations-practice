// Find palindrome:

// Alternate definition of a palindrome:
// Something is a palindrome if
//  1) It is either 1 or 0 characters long
//  2) The start and end letters are the same
//     and the inside of the string is also
//     a palindrome


function isPalindromeRecursive(word) {
    console.log(word);
    if (word.length <= 1) {
        return true;
    }
    // First and last don't match
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    // All but the first and last letter
    const inside = word.slice(1, word.length - 1);
    return isPalindromeRecursive(inside);
}


function isPalindrome(word) {
   // What strategy can you use to check
   // if this word is a palindrome
   // Keep track of TWO indices - start and end

   let start = 0;
   let end = word.length - 1;
   while(start < word.length / 2) {
    // We found a pair that DOESN'T MATCH
    if (word[start] !== word[end]) {
        return false;
    }
    start += 1; //Move one spot right
    end -= 1; //Move one spot left
   }
   return true;
}
console.log(isPalindromeRecursive('racecar'));
