// Problem Statement
//Description - Get number from string
/*
Write a function which removes from string all non-digit characters and parse the remaining to number. 
E.g: "hell5o wor6ld" -> 56
Function:
getNumberFromString(s) */

// My Solution 

// Create a function 
function getNumberFromString(s) {
// We need to search Number & return number --> Regex 
const result = s.replace(/\D/g, ''); //-- Applying Regex 
return Number(result);
}