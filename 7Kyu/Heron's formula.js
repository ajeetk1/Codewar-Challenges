/* Heron's formula.js
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:
where
 
Output should have 2 digits precision.
*/ 

//My Solution 
function heron(a, b, c) {
 let s = (a+b+c)/2
 return Math.sqrt(s*(s-a)*(s-b)*(s-c));
  }
