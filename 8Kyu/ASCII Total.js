// ASCII Total.js - Description 8kyu challenge 
//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
// Examples:
// uniTotal("a") == 97
// uniTotal("aaa") == 291

//My Solution -

function uniTotal (string) {
    let sum =0;
    for(let i=0;i<string.length;i++){
      const char_code = string.charCodeAt(i);
        sum += char_code;
      }
    return sum;
    }

