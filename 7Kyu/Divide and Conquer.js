// Divide and Conquer.js - Problem 
// Statement: Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//Return as a number.

// My Solution 

function divCon(x){
//add up the non-string integers We need to sum it
let sum =0;
for(let i =0;i<x.length;i++){
 //   return sum = sum+sum[i]; 
 // We need to non string integers
 //Substract total string integers

//How to check if they are non string integers -numbers check
if (typeof x[i] === 'number'){
return sum=sum+x[i];
//Here we are checking string
}if (typeof x[i]=== 'string'){
    return sum=sum-x[i];
}
}
return sum;
}