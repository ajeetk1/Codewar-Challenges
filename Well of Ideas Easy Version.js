// Description:
//For every good kata idea there seem to be quite a few bad ones!
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution 

function well(x){  // Lets create a function 
    let goodIdeas = 0;  // Initiate good idea.
    
    for (let idea of x) {
      if (idea === 'good') 
      goodIdeas += 1;
    }
    
    if (goodIdeas <= 0) return 'Fail!'; 
    
    return goodIdeas > 2 ? 'I smell a series!' : 'Publish!';
  }
