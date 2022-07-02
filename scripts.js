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