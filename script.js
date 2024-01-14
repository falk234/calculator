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



const numberButtons = document.querySelectorAll('button.number');
numberButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        numberOnDisplay+=(button.id);
        display(numberOnDisplay);
        console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);
    })
})

const display = (numberOnDisplay) => {
    let display = document.querySelector('#display');
    display.textContent=numberOnDisplay;
}

// Add event listener to operator buttons

// let operator calculate current result, display it and reset number on display again

const operatorButtons = document.querySelectorAll('button.operators');
operatorButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        let operatorOld=operator;
        operator=button.id;
        if(savedNumber){
            console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);
            savedNumber=operate (operatorOld,savedNumber,numberOnDisplay)
            console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);
            display(savedNumber);
            numberOnDisplay='';
        }else{
        savedNumber=numberOnDisplay;
        console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);
        numberOnDisplay="";
        }
    })
})

const equalButton = document.querySelector('button#equal');
equalButton.addEventListener('click', () => {
    numberOnDisplay=operate (operator,savedNumber,numberOnDisplay)
    console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);
    display(numberOnDisplay);
    savedNumber='';
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
    operator=''; 

}
