// Codewars -8Kyu - Vowel remover

// Description 
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//My Solution

//Through Regex 

function shortcut (string) {
	return string. replace(/[aeiou]/gi, '');
  }

  //-----------------------------

 function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}