// How it works: Imagine you are playing cards. Somebody is giving you cards one by one. When you are receiving card, you are planning to put them in a way so that the smaller one is on the left. This means you want to insert them in a sorted way

// step-1: If the first card you are getting is 5. Just hold the card in your hand. you dont have to do anything.

// step-2: If the second card is 2, you want to put it before 5 so that the two cards you have are sorted. When you are putting the card with number 2 at the left, you are changing the position of the card 5 from first position to second position. And then first position becomes available and you put 2 there.

// step-3: If the third card is 4. you will start from second position. In the second position, you have card 5 which is bigger than 4. Hence you will move 5 to the third position. The next card to the left is 2 which is smaller than 4. Hence, you wont move 2. And you will insert card 4 in the second position.

// step-4: Then you got 10. It is bigger than the previous card which is 5. Hence, you just add it at the last position.

// step-5: The next card is 7. You just move the position of the card 10 to the right and insert card 7.

// step-6: If the last card is 3. You will have to move 10 to the right as it is bigger than 3. and then you check with the next card to the left it is 7 which is bigger than 3. you move it to the right. similarly, you move 5, 4 to the right. And put the number 3 before 2 as 2 is smaller than 3.

// congrats. you are done.

/* jshint esversion: 6 */
var insertionSort = (arr) => {
//edge case: Make sure arr is an array!
  if(Array.isArray(arr) === false){
    return false;
  }

  //traversing in the array
for (var i = 1; i <= arr.length-1; i++){
  //edge case: make sire every index is a number!
  if(typeof arr[i] !== "number"){
        return false;
    }
      var chosen = arr[i];
      var checkArrIndex = i;
      var shifted = false;
         //when current index value is less than previous, shift to the left by one, keep repeating until it can't
    var j=0;
  while ( arr[checkArrIndex -1] > chosen){

    //write over the current index value with the previous
    arr[checkArrIndex] = arr[checkArrIndex -1];
    //index is now moved to the previous index
    checkArrIndex = checkArrIndex -1;
    shifted =true;
     j++;
  }
  if(shifted === true){
            //return the smaller value to the shifted index
  arr[checkArrIndex] = chosen;
  }
}
  return arr;
};
