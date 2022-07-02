// Add, subtract, multiply, divide functions
function add(...nums) {
    const sum = nums.reduce((ttl, num) => ttl + num);
    return sum;
}

function subtract(...nums) {
    const difference = nums.reduce((ttl, num) => ttl - num);
    return difference;
}

function multiply(...nums) {
    const product = nums.reduce((ttl, num) => ttl * num);
    return product;
}

function divide (...nums) {
    const quotient = nums.reduce((ttl, num) => ttl / num);
    return quotient;
}


// Calculator operator function
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
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