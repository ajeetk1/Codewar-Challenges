//Beginner - Reduce But Grow -8kyu
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My Solution 
function grow(x){
    const initialValue = 1;
    const multiplyValues = x.reduce ((previousValue , currentValue)=> previousValue*currentValue, initialValue);
    return multiplyValues;
    }
