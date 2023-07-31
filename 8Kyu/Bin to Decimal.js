// Bin to Decimal - Codewars 8kyu 
//Complete the function which converts a binary number (given as a string) to a decimal number.


//My Solution 

function binToDec(bin){
    let decimalNum = 0;
    let power = 0;
    
    for (let i = bin.length - 1; i >= 0; i--) {
      if (bin[i] === '1') {
        decimalNum += 2 ** power;
      }
      power++;
    }
    
  return decimalNum;
    }

    // Solution 2 

    function binToDec(bin){
        return parseInt(bin,2)
    }