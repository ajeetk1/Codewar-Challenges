// Quadrants - 8Kyu 
// Problem Statement-Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 
//(integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// My Solution
//Step :1 I have to add check the numbers(x,y) < && > 0 and put in quadrant 

function quadrant(x, y) {
    if(x<0 && y>0){
      return 2;
    } else if (x<0 && y<0){
      return 3;
    } else if (x>0 && y<0){
      return 4;
    } else {
     return 1;   
      }
  }  
    

