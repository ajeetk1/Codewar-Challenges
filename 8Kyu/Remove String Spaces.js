/* Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
*/

//My Solution

function noSpace(x){
let str=x.replace(/\s+/g, '');
return str;
}


//
const noSpace=x=>x.split(" ").join("");


//
function noSpace(x){
   return x.replace(/ /g,'')
}

//
function noSpace(x){
 let arr =  x.split(' ');
 return arr.reduce((a,b)=>a+b);
}
