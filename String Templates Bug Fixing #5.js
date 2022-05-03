// Description
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// My Solution:

// Here we have used Spread Operator and join fucntion with template literal.

function buildString(...template){
    return `I like ${template.join(', ')}!`
}
