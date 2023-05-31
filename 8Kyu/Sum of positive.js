// Problem Statement- Sum of positive.js
/* Description 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

// My Solution 
// Need to Declare a function 

function positivesum(arr){
// Filter the positive values 
let positiveArray = arr.filter(function(v){
    v>0;
});

// if array is blank
if(positiveArray ===0){
return 0;
}

//loop through the Array.
else {
let sum =0;
for(let i =0; i<=positiveArray.length;i++)
sum = sum + positiveArray[i];
}

return sum;

}
