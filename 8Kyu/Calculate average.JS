// Description 
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

//Solution:
function find_average(array) {
    if (array.length==[]){
      return 0;
    } else 
      return array.reduce((result, current) => result + current, 0) / array.length;
    }
//----
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }  
