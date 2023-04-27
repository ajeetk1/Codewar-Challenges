// Is he going to survive.js -Codewars 8kyu Challenge 
// Problem Statement

/*A hero is on his way to the castle to complete his mission. However, 
he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 
2 bullets to be defeated, our hero has no idea how many bullets he should carry.
Assuming he's gonna grab a specific given number of bullets and move forward to fight another 
specific given number of dragons, will he survive? */


// My Solution 
// Need to Check Each Dragon needs 2 Bullets  D == 2B  bullets >= 2*dragons or bullets/2>=dragons

// My Solution 

function hero(bullets, dragons){
if (bullets >= 2*dragons){
    return true;
} else 
return false;
}

