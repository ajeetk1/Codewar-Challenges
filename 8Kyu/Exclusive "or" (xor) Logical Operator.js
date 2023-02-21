// Exclusive "or" (xor) Logical Operator - 8Kyu
//In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) 
//called the "Exclusive Or" (hence the name of this Kata). 
//The exclusive or evaluates two booleans. 
//It then returns true if exactly one of the two expressions are true, false otherwise. 
//For example:

// My Solution

function xor(a, b) {
    if(a===false && b===false ){
      return false;
    } else if (a===true && b===false){
      return true;
    } else if(a===false && b===true){
      return true;
    } else {(a===true || b===true)
      return false;
            }
    }