//Requirement: 
//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples(Operator, value1, value2) --> output

//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

//My Solution:
// Declare function take 3 variables (operator,value1,Value2 )

function basicOp(operator, value1, value2){
// write cases for different operators 
// I can use if else or Switch case statement.
 if(operator=="+"){
    return value1+value2;
 } else if(operator=="-"){
    return value1-value2;
 } else if(operator=="*"){
    return value1*value2;
 } else
   return value1/value2;
};

//We can also do through the switch case statement

function basicOp(operator,value1,value2){
    switch(operator) {
        case '+':
        return value1+value2;
        case '-':
        return value1-value2;
        case '*':
        return value1*value2;
        case '/':
        return value1/value2;
    }
};

    