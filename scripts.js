// Global Variables
let firstValue = 0;
let secondValue = 0;
let operator = null;
let result = '';
let clearScreen = false;
let hasDecimal = false;

// Selectors
const numberButtons = document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal')
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.del');
const equalsButton = document.querySelector('equals');
const input = document.querySelector('.input')

input.innerHTML = 0;

// Button events
numberButtons.forEach(button => {
    button.addEventListener('click', getNumber)
})

decimal.addEventListener('click', addDecimal)

clearButton.addEventListener('click', clearCalculator)

deleteButton.addEventListener('click', deleteNumbers)

// Calculator behavior
operatorButtons.forEach(button => {
    button.addEventListener('click', getOperator)
})

// Functions
function getOperator() {
    if (result == '') {
        secondValue = input.innerHTML;
    } else {
        firstValue = result;
        secondValue = input.innerHTML;
    }
    console.log(`Before result: ${result}.`);
    operator = this.innerHTML;
    result = operate(firstValue, secondValue, operator);
    console.log(`After result: ${result}.`);
}

function getNumber() {
    if (input.innerHTML == 0 && this.innerHTML == 0) {
        return; // 0 stays '0', not '00' etc.
    } else if (input.innerHTML == 0 && this.innerHTML !== 0 &&
        hasDecimal == false) {
        input.innerHTML = ''; //replace zero w/ init value
        input.innerHTML += this.innerHTML;
    } else if (input.innerHTML.length < 9) { 
        input.innerHTML += this.innerHTML;
    }
    if (clearScreen == true) { //makes next input start over again
        input.innerHTML= '';
        input.innerHTML += this.innerHTML;
        clearScreen = false;
    }
}

function addDecimal() {
    if (input.innerHTML.indexOf('.') == -1) { //only 1 decimal point allowed
        input.innerHTML += '.';
        hasDecimal = true;
    } 
}

function deleteNumbers() {
    let newNum;
    let originalNum = input.innerHTML;
    originalNum.length > 1 ? newNum = originalNum.slice(0, originalNum.length - 1) :
        newNum = 0; // don't delete display past 0
    input.innerHTML = newNum;
}

function clearCalculator() {
    input.innerHTML = 0;
    firstValue = 0;
    secondValue = 0;
    result = 0;
    operator = null;
}

function add(a,b) {
    return +a + +b; //force NUM type, take away string cancatination
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide (a,b) {
    if (b==0){
        input.textContent = 'E'
    }
    return a / b;
}

// Calculator operator function
function operate(a, b, operator) {
    switch (operator) {
        case '+': // operate(2, 3, '+')
            return add(a,b); // 5
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            0; //changed from 0 to try and get = behavior correct
    }
}