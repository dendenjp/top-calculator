'use strict';

let display = document.querySelector('span');
let firstOperand = 0;
let secondOperand = 0;
let currentOperand = 0;

let numPad = Array.from(document.querySelectorAll('.numpad'));
numPad.forEach((e) =>
    e.addEventListener('click', function () {
        if (e.textContent === 'C') display.textContent = '';
        if (e.textContent === '←') {
            display.textContent = display.textContent.slice(0, -1);
        } else display.textContent = display.textContent + e.textContent;
        firstOperand = Number(display.textContent);
    })
);

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

function operate(a, operator, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

console.log(operate(2, '+', 3));
console.log(operate(2, '-', 3));
console.log(operate(2, '*', 3));
console.log(operate(2, '/', 3));
console.log(operate(2.3, '*', 3.6));
console.log(12 + 7 - 5 * 3);
