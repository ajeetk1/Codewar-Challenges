// Requirement:- Quarter of Year 
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
//Fundamentals

//My Solution
function quarterOf(month){
    let quarterOne =(1,2,3);
    let secondQuarter=(4,5,6);
    let thirdQuarter=(7,8,9);
    let fourthQuarter=(10,11,12);
    if (month == 1||month==2||month==3){
      return  1 ;
    } else if (month==4||month==5||month==6){
               return 2;
    }else if(month==7||month==8||month==9){
               return 3;
    } else 
      return 4;
    
  }

  //---------------------
  const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    
  }

  //---

  const quarterOf = m => Math.ceil(m/3);
