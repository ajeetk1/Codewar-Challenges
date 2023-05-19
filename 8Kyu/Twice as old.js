// Problem Twice as old - 8kyu Challenges
/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/ 

// My Solution 

// Write a function with father years and Son years

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // We need Absolute Numbers Math.abs 
    return Math.abs(dadYearsOld - sonYearsOld*2);
  }

// My Second Solution 
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // dadYearsOld must be sonYearsOld * 2
    // dadYearsOld when son is 0 is dadYearsOld - sonYearsOld
    let difference = dadYearsOld - sonYearsOld;
    return Math.abs(dadYearsOld - difference*2);
  }