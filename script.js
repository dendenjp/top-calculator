'use strict';
let firstOperand = 0;
let secondOperand = 0;
let operator = '';
let result = 0;
console.log(operator);

const display = document.querySelector('.display-area');

const backBtn = document.querySelector('.back');
const clearBtn = document.querySelector('.clear');
const operators = Array.from(document.querySelectorAll('.operator'));
const numpad = Array.from(document.querySelectorAll('.numpad'));
// const keypad = Array.from(document.querySelectorAll('.keypad'));

backBtn.addEventListener('click', backSpace);
clearBtn.addEventListener('click', clearScreen);
numpad.forEach((e) => e.addEventListener('click', displayOnScreen));
operators.forEach((e) => e.addEventListener('click', calculate));
// keypad.forEach((e) => e.addEventListener('click', calculate));

function displayOnScreen(e) {
    display.innerText = '';
    display.innerText += e.target.innerText;
    console.log(display.innerText);
}

function calculate(e) {
    if (operator == '') {
        operator = e.target.textContent;
        console.log(operator);
        firstOperand = +display.innerText;
    } else {
        secondOperand = +display.innerText;
        result = operate(firstOperand, operator, secondOperand);
        displayResult();
        operator = e.target.textContent;
        firstOperand = result;
        result = 0;
    }
}

function displayResult() {
    display.innerText = result;
}

function backSpace(e) {
    display.innerText = display.textContent.slice(0, -1);
}

function clearScreen() {
    display.innerText = '';
    result = 0;
    firstOperand = 0;
    secondOperand = 0;
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
