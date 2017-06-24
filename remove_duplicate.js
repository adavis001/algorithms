// remove Duplicate
// Question: How would you remove duplicate members from an array?

// Answer: will start a while looping and keep an object. If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.


function removeDuplicate(arr){
  var exists ={},
      outArr = [];

  for(var i =0; i<arr.length; i++){
    if(!exists[arr[i]]){
      outArr.push(arr[i]);
      exists[arr[i]] = true;
   }
      // console.log(exists);
  }
  console.log(outArr);
  return outArr;
}

removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
  // [1, 3, 5, 6, 7, 8]