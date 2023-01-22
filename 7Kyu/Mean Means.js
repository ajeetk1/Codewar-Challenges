//Mean Means -7kyu 
// Take a list of n numbers a1, a2, a3, ..., aN to start with.
// Arithmetic mean (or average) is the sum of these numbers divided by n.
// Geometric mean (or average) is the product of these numbers taken to the nth root.
//You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. 
// Using this information, you must figure out and return the geometric mean of the FULL LIST, 
// including the number that's missing.

//My Solution
function geo_mean(nums, arith_mean,length=nums.length+1) {
    let number = arith_mean*length-nums.reduce((acc,currentValue)=>acc+currentValue,0);
     return (nums.reduce((acc,currentValue)=>acc*currentValue,1)*number)**(1/length);
}