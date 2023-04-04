// Problem - Remove the parentheses.js

//Description 
/*Remove the parentheses
In this kata you are given a string for example:
"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.
The example above would return:
"exampleexample" */

// My Solution

const removeParentheses = s => {
    let startDeleteCount = 0;
    let newLetters = [];
    s.split('').forEach(el => {
      if (el === '(') {
        startDeleteCount++;
      } else if (el === ')') {
        startDeleteCount--;
      } else if (startDeleteCount < 1) newLetters.push(el);
    });
    return newLetters.join('');
  }

// My Second Solution 

function removeParentheses(s){
    let bracket = 0
    
    return s.split('').map(char => {
      if (char === '(') {
        bracket += 1
      } else if (char === ')') {
        bracket -= 1
      } else if (!bracket) return char
    }).join('')
  }
  