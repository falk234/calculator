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

let num1="";
let num2="";
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

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// queryselctor für zahlen tasten
// in array schreiben
// array auf display ausgeben nach jedem klick

// alternativ kann ich die zahlen auch einfach als ein String speichern und über + hinzufügen

let numberOnDisplay="";

const numberButtons = document.querySelectorAll('button.number');
numberButtons.forEach( (element) => {
    element.addEventListener('click', () => {
        numberOnDisplay+=(element.id);
        display(numberOnDisplay);
        // console.log(numberOnDisplay);
    })
})

const display = (numberOnDisplay) => {
    let display = document.querySelector('#display');
    display.textContent=numberOnDisplay;
} 