// Problem Statement Array plus Array 
/*'m new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/ 

// Solution 

function arrayPlusArray(arr1,arr2){
let sum =[];

for (let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
    sum = arr1[i]+arr2[j];
    }
 return sum;
}

