// Simple Multiplication - 8Kyu Kata 
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution 
// Odd Number and Even Number  number % 2 =0
function simpleMultiplication(number) {
    if(number%2==0){
      return number*8;
    } else{
      return number*9;
    }
  }
  