// Problem Count the number of cubes with paint on
/*Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.*/


// My Solution 
const countSquares = cuts =>
cuts == 0 ? 1 : cuts==1 ? 8 : (cuts+1)**3 - (cuts -1)**3;



/* 0 cut = 1
1 cut = 8 cubes 
// cube (Number cust + 1)
// 2 cube =26 => 1 
// 3 = 64= 56
// 4 = 98 => 125 Difference is 27 3 cube 
// 5 = 152 => 216-152= 64 4 cube