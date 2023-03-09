//Unexpected parsing - 8kyu 
//Here is a piece of code:

// function getStatus(isBusy) {
//     var msg = (isBusy ? "busy" : "available");
//     return 
//     {
//       status: msg
//     }
//   }

// My Solution 
// Object:
function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {status: msg} // Here we are creating Object
  }
