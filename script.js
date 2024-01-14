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

let numberOnDisplay="";
let savedNumber="";
let operator=''; 

// Functions

const operate = (operator,savedNumber,numberOnDisplay) => {
    switch (operator){
        case '+' : return add(+savedNumber,+numberOnDisplay);
        case '-' : return subtract(+savedNumber,+numberOnDisplay);
        case '*' : return multiply(+savedNumber,+numberOnDisplay);
        case '/' : return divide(+savedNumber,+numberOnDisplay);
    }
}

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// queryselctor für zahlen tasten
// in array schreiben
// array auf display ausgeben nach jedem klick

// alternativ kann ich die zahlen auch einfach als ein String speichern und über + hinzufügen



const numberButtons = document.querySelectorAll('button.number');
numberButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        numberOnDisplay+=(button.id);
        display(numberOnDisplay);
        // console.log(numberOnDisplay);
    })
})

const display = (numberOnDisplay) => {
    let display = document.querySelector('#display');
    display.textContent=numberOnDisplay;
}

// Add event listener to operator buttons


const operatorButtons = document.querySelectorAll('button.operators');
operatorButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        savedNumber=numberOnDisplay;
        numberOnDisplay="";
        display(numberOnDisplay);
        operator=button.id;
        // console.log(numberOnDisplay);
    })
})

const equalButton = document.querySelector('button#equal');
equalButton.addEventListener('click', () => {
    let result=operate (operator,savedNumber,numberOnDisplay)
    display(result);
    // reset();
    })

const resetButton = document.querySelector('button#reset');
resetButton.addEventListener('click', () => {
    display(0);
    reset();
})

const reset = () => {
    numberOnDisplay='';
    savedNumber='';
}