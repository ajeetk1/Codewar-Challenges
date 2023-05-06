// Area of an arrow-7kyu
/*Area of an arrow

An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
Write a function which returns the area of the arrow. */

//My Solution

// Here we have to calculate side of arrow that is rectangle length & breadth is ab/2

function arrowArea(a,b) {
    return 1/2*(a*b/2);
  }