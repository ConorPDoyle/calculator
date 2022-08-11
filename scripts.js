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

clearButton.addEventListener('click', clearCalculator)

deleteButton.addEventListener('click', deleteNumbers)


// Calculator behavior
operatorButtons.forEach(button => {
    button.addEventListener('click', getOperatorAndValues)
})


// Functions
function getOperatorAndValues() {
    if (operator == null || operator == '=') { //First numbers entered w/o any math
            firstValue = input.innerHTML;
            operator = this.innerHTML;
            clearScreen = true;
    } else {                                   //Uses operator from before, makes new value the 'secondValue', does operation, marks screen to be cleared. Can do infinitely
            secondValue = input.innerHTML;
            result = truncateResult(doOperation(firstValue, secondValue, operator));
            input.innerHTML = result;
            firstValue = result;
            operator = this.innerHTML;
            clearScreen = true;
    }
}

function getNumber() {
    if (input.innerHTML == 0 && this.innerHTML == 0 && hasDecimal == false) {
        return; // repeated 0 inputs stays '0', not '00' or '000' etc.
    } else if (this.innerHTML == '.') {
        addDecimal();
    } else if (input.innerHTML == 0 && this.innerHTML !== 0 &&
        hasDecimal == false) {
        input.innerHTML = ''; //replace zero w/ init value
        input.innerHTML += this.innerHTML;
    } else if (input.innerHTML.length < 9) { 
        input.innerHTML += this.innerHTML;
    }
    if (clearScreen == true) { //makes next input start over again
        if (this.innerHTML == '.') {
            input.innerHTML = '0';
            addDecimal();
        } else {
            input.innerHTML = '';
            input.innerHTML += this.innerHTML;
        }
        clearScreen = false;
    }
}

function truncateResult(num) {
    if (num > 999999999) {
        return num.toExponential(3)
    } else if (num == 'E'){
        return 'E'
    } else {
        return Math.round(num*10000000)/10000000;
    }
}

function addDecimal() {
    if (input.innerHTML.indexOf('.') == -1 && input.innerHTML.length < 9) { //only 1 decimal point allowed //length prevents extra space added to input
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
    if (newNum && (newNum.indexOf('.') == -1)) {
        hasDecimal = false;
    }
}

function clearCalculator() {
    input.innerHTML = 0;
    firstValue = 0;
    secondValue = 0;
    result = 0;
    operator = null;
    hasDecimal = false;
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

function divide(a, b) {
    if (b==0){
        return 'E';
    } else {
        return a / b;
    }
}

// Calculator operator function
function doOperation(a, b, operator) {
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
            0;
    }
}