// check Prime
// Question: How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)


function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor === 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

//this one is buggy for some reason.  237 is counted as prime.  WHY?!
// function isPrime(n){

//   for (var i = 2; i<=n; i++){
//     if (n % i === 0){
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

console.log(isPrime(137));
// true
console.log(isPrime(237));
// false