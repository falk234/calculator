// Operations
const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}

// Variables

let num1=0;
let num2=0;
let operator=''; 

// Functions

const operate = (operator,num1,num2) => {
    switch (operator){
        case '+' : return add(num1,num2);
        case '-' : return subtract(num1,num2);
        case '*' : return multiply(num1,num2);
        case '/' : return divide(num1,num2);
    }
}

console.log(operate('+',3,4));