'use strict';
let firstOperand = 0;
let secondOperand = 0;
let pressedOperator = false;
let pressedEqual = false;

let displayScreen = document.querySelector('span');
let backBtn = document.querySelector('.back');
let clearBtn = document.querySelector('.clear');

let operators = Array.from(document.querySelectorAll('.operator'));

let numPad = Array.from(document.querySelectorAll('.numpad'));

backBtn.addEventListener('click', backSpace);
clearBtn.addEventListener('click', clearScreen);
numPad.forEach((e) => e.addEventListener('click', displayOnScreen));
operators.forEach((e) => e.addEventListener('click', calculate));

function displayOnScreen(e) {
    displayScreen.innerText = +(displayScreen.innerText + e.target.id);
    // firstOperand = +(displayScreen.innerText + e.target.id);
    // displayScreen.innerText = firstOperand;
}

function calculate(e) {
    // displayScreen.innerText = firstOperand;
    firstOperand = +displayScreen.innerText;
    console.log(typeof e.target.innerText);
    if (e.target.innerText === '+') {
        displayScreen.innertext = '';
        console.log(firstOperand);
    }
}

function backSpace() {
    displayScreen.innerText = displayScreen.textContent.slice(0, -1);
    // firstOperand = +displayScreen.innerText;
}

function clearScreen() {
    displayScreen.innerText = '';
    // firstOperand = +displayScreen.innerText;
}

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
/* 
function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            alert('Invalid');
    }
}
 */
