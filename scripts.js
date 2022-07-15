//Selectors
const numberButtons = document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal')
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.del');
const equalsButton = document.querySelector('equals');
const input = document.querySelector('.input')

input.innerHTML = 0;

//Button events
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
            if (input.innerHTML == 0 && button.innerHTML == 0) {
                return; // 0 stays '0', not '00' etc.
            }
            else 
            if (input.innerHTML == 0 && button.innerHTML !== 0) {
            input.innerHTML = ''; //replace zero w/ init value
            input.innerHTML += button.innerHTML;
            } else if (input.innerHTML.length < 9) { 
                input.innerHTML += button.innerHTML;
        }
    })
})

decimal.addEventListener('click', () => {
            if (input.innerHTML.indexOf('.') == -1) { //only 1 decimal point allowed
            input.innerHTML += '.';
        } 
})

clearButton.addEventListener('click', () => {
    input.innerHTML = 0;
})

deleteButton.addEventListener('click', ()=>{
    let newNum;
    const originalNum = input.innerHTML;
    originalNum.length > 1 ? newNum = originalNum.slice(0, originalNum.length - 1) :
        newNum = 0; // don't delete past 0
    input.innerHTML = newNum;
})



// Add, subtract, multiply, divide functions
function add(...nums) {
    const sum = nums.reduce(
        (ttl, num) => ttl + num
        );
    return sum;
}

function subtract(...nums) {
    const difference = nums.reduce(
        (ttl, num) => ttl - num
        );
    return difference;
}

function multiply(...nums) {
    const product = nums.reduce(
        (ttl, num) => ttl * num
        );
    return product;
}

function divide (...nums) {
    const quotient = nums.reduce(
        (ttl, num) => ttl / num
        );
    return quotient;
}


// Calculator operator function
function operate(a, b, operator) {
    switch (operator) {
        case '+': // operate(2, 3, '+')
            return add(a, b); // 5
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