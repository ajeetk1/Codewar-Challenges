// Codewas 7kyu - Simple Fun #176: Reverse Letter
//Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// My Solution

function reverseLetter(str){
   // First is we need to remove the Alpahnumeric Character from string - Rejex
     let constString= str.replace(/[^a-z0-9]/gi, '');
     // We need to reverse it 
     return constString.split('').reverse().join('');
}