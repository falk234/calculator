let numberOnDisplay="";
let savedNumber="";
let operator='';
let operatorOld='';

// Functions

const calculate = (operator) => {

    switch (operator){
            case '+' : savedNumber = +savedNumber + +numberOnDisplay; break;
            case '-' : savedNumber = +savedNumber - +numberOnDisplay; break;
            case '*' : savedNumber = +savedNumber * +numberOnDisplay; break;
            case '/' : savedNumber = +savedNumber / +numberOnDisplay; break;
        }
    
    if (savedNumber==Infinity){
        return 'zero';
    }else{
        return Math.round((savedNumber+Number.EPSILON)*100)/100; // 1,2356 => 1,24
    }
}


const operate = (operatorNew) => {
//  New calculation after '=' or '=' pressed twice
    if (operator== 'equal'){
        operator=operatorNew;
        if (operator== 'equal') reset();
    }
// check if 2 numbers do already exist => need to be calculated together before 2nd operator can be used
    if (numberOnDisplay && savedNumber){
        savedNumber=calculate(operator); //calculate with operator from before
        operator=operatorNew; //  last operator has been "used", next time the current shall be used
    }else if (numberOnDisplay){ // in case only one number and operator is given (e.g. 59 +)
        operator=operatorNew;
        savedNumber=numberOnDisplay;
    }
    numberOnDisplay='';

// Check calculation and display it
    if (savedNumber == 'zero'){
        display("Division with 0 is not possible!");
    }else{
        display(savedNumber);
    }
    // else display(savedNumber);
}



const numberButtons = document.querySelectorAll('button.number');
numberButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        // if (operator==='=') numberOnDisplay='';
        numberOnDisplay+=(button.id);
        display(numberOnDisplay);
    })
})

const display = (numberOnDisplay) => {
    let display = document.querySelector('#display');
    display.textContent=numberOnDisplay;
}

const operatorButtons = document.querySelectorAll('button.operators');
operatorButtons.forEach( (button) => {
    button.addEventListener('click', () => {
     operate (button.id);
    })
})

const equalButton = document.querySelector('button#equal');
equalButton.addEventListener('click', () => {
    operate(equalButton.id)
    })

const resetButton = document.querySelector('button#reset');
resetButton.addEventListener('click', () => {
   reset();
})

const reset = () => {
    display(0);
    numberOnDisplay='';
    savedNumber='';
    operator=''; 
}

// console.log("numberOnDisplay: "+ numberOnDisplay+ ", savedNumber: "+savedNumber+ " ,operator: "+operator);

// fixed switch-case statement (no break)
// new function calculate that will do calculation and decision altogether
// moved code from equal and operator buttons to operation function to reduce redundant code