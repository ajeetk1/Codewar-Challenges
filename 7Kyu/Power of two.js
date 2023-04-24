// Power of two.js -7kyu 
// Description Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//You may assume the input is always valid.

// My Solution
 
// Here I had to check the option to number is less then 2,equal to 2 and greater then 2.

function isPowerOfTwo(n){
    if(n<2) return false;
    if(n==2) return true;
    if(n>2) return isPowerOfTwo(n/2);
  }