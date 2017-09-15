// Basic algorithm to get back into the swing of using JavaScript.  The idea was to reverse a string.  Not the most difficult, but after weeks of only focusing on front end frameworks I am surprised how rusty I have become!

function FirstReverse(str) { 

  // code goes here  
  var split = str.split('')
  var reversed = '';
  
  for(var i=split.length -1; i>-1; i--){
      reversed += split[i]
  }
  return reversed; 
         
}
   
// keep this function call here 
FirstReverse(readline());