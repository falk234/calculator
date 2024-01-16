let numberOnDisplay="";
let savedNumber="";
let operator='';

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
    
    // normal calculation
    if (numberOnDisplay && savedNumber){
        savedNumber=calculate(operator); // calculate with operator from before
        (operatorNew=="=")?operator="":operator=operatorNew; // Set new operator for next calculation. If "=", there is no new operator
    }
    
    // If only one number is available (first calculation). If there are no numbers, do nothing
    if (savedNumber=='' && (!numberOnDisplay=='')){
        savedNumber = numberOnDisplay; // no calculation, just save number and operator
        operator=operatorNew;
        }
    
    // operator Button pressed twice, ('=' pressed twice => do nothing)
    if (numberOnDisplay=='' && !(operatorNew == '')){
            operator=operatorNew
        }
    
    // Prepare for next calculation
    if (savedNumber == 'zero'){
        display('Division with 0 not possible!');
        reset();
    }else{
        numberOnDisplay=''; // clean for new number
        display(savedNumber); //display result of calculation
    }
}

const numberButtons = document.querySelectorAll('button.number');
numberButtons.forEach( (button) => {
    button.addEventListener('click', () => {
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
    display(0);
    reset();
})

const reset = () => {
    numberOnDisplay='';
    savedNumber='';
    operator=''; 
}