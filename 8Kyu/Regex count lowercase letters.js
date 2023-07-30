// Problem -8kyu Regex count in lower letter
/*Your task is simply to count the total number of lowercase letters in a string.

*/

//My Solution
function lowerCaseCount (str){  // From Str find count of lowercase letters

    let count = 0;

    // Loop through the str every char 
    // check if it is lower case 
    //increase count

  for (const char of str ){
    if(char.match(/[a-z]/)){
        //count = count+1;
        count += 1;
    }
}
   return count;
    

}