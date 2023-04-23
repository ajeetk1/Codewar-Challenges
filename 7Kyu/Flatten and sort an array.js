// Flatten and sort an array.js - 7kyu 
/*Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum: */

// My Solution here we have to create a common array 
"use strict";

function flattenAndSort(array) {
// We have concat arrays 
let flatArray = [].concat.apply([],array);
// Now need to sort aray in ascending 
flatArray.sort(function(a,b){return(a-b)})
}


