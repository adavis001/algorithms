// remove duplicate char
// Question: How will you remove duplicate characters from a sting?

function removeDuplicateChar(str){
  var duplicates = [];
  for (var i = 0; i < str.length; i++){
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      duplicates.push(str[i]);
    }
  }
  return duplicates.join('');
}


removeDuplicateChar('Learn more javascript dude');