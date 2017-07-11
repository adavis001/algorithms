

// how it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.
/*jshint esversion: 6*/

function selectionSort(arr){

  var newArr = [];
  var smallest = arr[0];
  var index = 0;
//edge case: Make sure arr is an array!
  if(Array.isArray(arr) === false){
    return false;
  }

  while(arr.length !== 0){
    for(var i = 1; i<arr.length; i++){
    //edge case: make sire every index is a number!
      if(typeof arr[i] !== "number"){
        return false;
    }
    //if index is less than smallest value, replace smallest value
      if(arr[i] < smallest){
        smallest = arr[i];
        index = i;
      }
    }
    //move smallest into the newArr and remove it from arr
    arr.splice(index,1);
    newArr.push(smallest);
    smallest = arr[0];
    index = null;
  }
  return newArr;
}
