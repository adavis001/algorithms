// First non repeating char
// Question: How could you find the first non repeating char in a string?


function firstNonRepeatChar(str){
  var repeats = [];
  for (var i = 0; i < str.length; i++){
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      repeats.push(str[i]);
    }
  }
  return repeats[0];
}

firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
 // "f"