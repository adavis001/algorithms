//Create a function to find the middle character of a string.  If string length is odd, return 2 middle characters

function findMid(str){
	var mid = '',
		substr = str.substring(1);

	mid += str.charAt(str.length/2);
	if (str.length % 2 !== 0){
		mid += substr.charAt(str.length/2);
	}
	console.log('substr', substr);
	return mid;
}

console.log(findMid('snack'));