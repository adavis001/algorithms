// check palindrome
// Question: How will you verify a word as palindrome?

function isPalindrome(str){
var reverseStr = str.split('').reverse().join('');

  if (reverseStr === str){
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('cat'));