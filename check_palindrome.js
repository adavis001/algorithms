// check palindrome
// Question: How will you verify a word as palindrome?
// Palindrom is spelled the same if it is reversed.

// function isPalindrome(str){
// var reverseStr = str.split('').reverse().join('');

//   if (reverseStr === str){
//     return true;
//   } else {
//     return false;
//   }
// }



function isPalindrome(str){
var reverseStr = [],
    tempStr = str.split('');
// .reverse().join('');


for (var i = tempStr.length - 1; i >= 0; i--){
  reverseStr.push(tempStr[i]);
}

  if (reverseStr.join('') === str){
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome('tacocat'));
console.log(isPalindrome('cat'));