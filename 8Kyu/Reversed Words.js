//Complete the solution so that it reverses all of the words within the string passed in.
//Example(Input --> Output):
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// Reverse the Sentence:

//My Solution:
function reversewords(str){
return str.split(' ').reverse().join(' ');
};

var reverseWords = e => e.split(' ').reverse().join(' ')