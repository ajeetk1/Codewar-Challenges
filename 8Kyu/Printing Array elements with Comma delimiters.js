// Printing Array elements with Comma delimiters- Codewars 8kyu 
// Problem Statement
/*Input: Array of elements["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a" */

//Solution Steps
//Remove the "" from the Array we have to use join method as it is used in Array.
function printArray(array){
const result = array.join(",") // Remove "" and returns h,o,l,a
// Now we need to convert to string using toString();
}
