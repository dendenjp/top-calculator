'use strict';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log('Error');
        return 'Error';
    } else return a / b;
}

function operate(a, operand, b) {
    if (operand === '+') return add(a, b);
    if (operand === '-') return subtract(a, b);
    if (operand === '*') return multiply(a, b);
    if (operand === '/') return divide(a, b);
}

console.log(operate(2, '+', 3));
console.log(operate(2, '-', 3));
console.log(operate(2, '*', 3));
console.log(operate(2, '/', 3));
console.log(operate(2.3, '*', 3.6));
console.log(12 + 7 - 5 * 3);
