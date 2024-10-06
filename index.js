


function isPalindrome(word) {
  const wordArray = word.split("")
  const reverseArray = wordArray.reverse()
  const reverseWord = reverseArray.join("")
  

  if (word === reverseWord) {
    return true 
  } else {
    return false 
  }

}

/* 
Write down word forwards
Write down word backwards 
Compare spelling
Check to see that each letter in each position in the two words is the same
If the letters are the same it is a palindrome
If the letter are not the same then it is not a palindrome

Arrays have a reverse() method 


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
