// Description Surface Area and Volume of a Box

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//My Solution

function getSize(width, height, depth){
    let area=(width*height+width*depth+height*depth)*2;
    let volume=width*height*depth;
     return[area, volume];
    
    }

//
function getSize(w, h, d){
    var area = (2*d*h) + (2*w*h) + (2*d*w);
    var volume = d*w*h;
    return [area, volume];
  }

//const getSize = (w, h, d) => {
    const area = (w * h * 2) + (w * d * 2) + (h * d * 2)
    const volume = w * h * d
    return [area, volume]
  }

