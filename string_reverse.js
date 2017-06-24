// string reverse
// Question: How would you reverse a string in JavaScript?

function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

console.log(reverse('you are a nice dude'));
  //"edud ecin a era uoy"



// FOr older browsers that don't like concatination too much.  Use a similar method but with an array isntead.  Then join them at the end to create a string.
//   function reverse(str){
//   var rtnStr = [];
//   if(!str || typeof str != 'string' || str.length < 2 ) return str;

//   for(var i = str.length-1; i>=0;i--){
//     rtnStr.push(str[i]);
//   }
//   return rtnStr.join('');
// }

//Shorter way
// function reverse(str){
//   if(!str || str.length <2) return str;

//   return str.split('').reverse().join('');
// }
