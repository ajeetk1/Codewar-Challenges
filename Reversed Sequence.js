// Problem Statement - Reverse Sequence - 8kyu  
/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/ 

// My Solution 
// Reverse Factorial Function in Array 

const reverseSeq = n => {
    // n is positive n>0
        let array =[]; // Blank Array
        for(let i=n;i>=1;i--){     //  The first solution uses a for loop to iterate from n down to 1 and push the values to the array
          array.push(i);
        }
        return array;
    }

    
    

    
    
 

