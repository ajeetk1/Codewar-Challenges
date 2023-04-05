//Problem = Pythagorean Triple
//My Solution 
/*Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2

Examples*/ 

// My Solution 
function isPythagoreanTriple(integers) {
    let [a,b,c] = integers.sort((a,b)=>a-b)
    return a**2+b**2==c**2;
    }
     