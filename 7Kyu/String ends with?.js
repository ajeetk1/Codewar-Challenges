//String ends with.js -7kyu

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

// My Solution 
function solution(str, ending){
    return str.endsWith(ending); 
    
    // well apparently there is a string method called endsWith( ) 
    //and you can pass in what you want to evaluate the ending of str against and that’s it. 
 }

 // My Second Solution 
 function solution(str, ending){
    return str.slice(str.length-ending.length) === ending;
  }

  // My Third Solution 
  function solution(str, ending){
    var test = str.slice(-(ending.length));
    if (test === ending){
       return true;
    }
    return false;

}