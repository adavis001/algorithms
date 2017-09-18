// Given an array of N  integers, can you find the sum of its elements?

function simpleArraySum(n, ar) {
    // Complete this function
    var sumArr = 0;
    
    for(var i=0; i<n; i++){
        sumArr += ar[i];
    }
    return sumArr;
}

//Again, this is a painfully easy algorithm, but in the interest of practicing the basics after not doing algorithms for so long, I decided to do it anyway.

// I also realize that I try to solve most algorithms with some sort of for loop.  I may try to solve it again with a while loop instead in the future to get extra practice.