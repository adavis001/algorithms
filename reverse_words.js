// reverse words
// Question: How would you reverse words in a sentence?

// function reverseWords(str){
//  var rev = [],
//      wordLen = 0;
//  for(var i = str.length-1; i>=0; i--){
//    if(str[i]==' ' || i==0){
//      rev.push(str.substr(i,wordLen+1));
//      wordLen = 0;
//    }
//    else
//      wordLen++;
//  }
//  return rev.join(' ');
// }


// function reverseWords(str){
//   return str.split(' ').reverse().join(' ');
// }

function reverseWords(str){
	var reverse = '',
		justWords = str.split(' ');

	for (var i = justWords.length -1; i>=0; i--){
		reverse +=justWords[i];
		reverse +=(' ');
	}
	return reverse;
}
console.log(reverseWords('Who are you going to call?'));