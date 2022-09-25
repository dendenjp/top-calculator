'use strict';
let firstOperand = 0;
let secondOperand = 0;
let operator = '';
let result = 0;
let isDisplayEmpty = true;
let isOperator = false;

const display = document.querySelector('.display-area');

const backBtn = document.querySelector('.back');
const clearBtn = document.querySelector('.clear');
const operators = Array.from(document.querySelectorAll('.operator'));
const numpad = Array.from(document.querySelectorAll('.numpad'));
const equalsBtn = document.querySelector('.equals');
// const keypad = Array.from(document.querySelectorAll('.keypad'));

backBtn.addEventListener('click', backSpace);
clearBtn.addEventListener('click', clearScreen);
numpad.forEach((e) => e.addEventListener('click', displayOnScreen));
operators.forEach((e) => e.addEventListener('click', calculate));
equalsBtn.addEventListener('click', equals);
// keypad.forEach((e) => e.addEventListener('click', calculate));

function displayOnScreen(e) {
    if (display.innerText == 0) {
        display.innerText = '';
    }

    if (isDisplayEmpty == false) {
        display.innerText = '';
        isDisplayEmpty = true;
    }

    display.innerText += e.target.innerText;
}

function calculate(e) {
    if (operator == '') {
        operator = e.target.textContent;

        firstOperand = +display.innerText;
        isDisplayEmpty = false;
    } else {
        secondOperand = +display.innerText;
        result =
            Math.round(
                operate(firstOperand, operator, secondOperand) * 100000
            ) / 100000;
        displayResult();
        operator = e.target.textContent;
        firstOperand = result;
        secondOperand = 0;

        isDisplayEmpty = false;
    }
}

function equals(e) {
    secondOperand = +display.innerText;
    result =
        Math.round(operate(firstOperand, operator, secondOperand) * 100000) /
        100000;
    displayResult();
    firstOperand = 0;
    operator = '';
    isDisplayEmpty = false;
}

function displayResult() {
    if (result === undefined || result === NaN) {
        display.innerText = 'Error. C to clear.';
    } else if (result !== undefined || result !== NaN) {
        display.innerText = result;
    }
}

function backSpace(e) {
    display.innerText = display.textContent.slice(0, -1);
}

function clearScreen() {
    display.innerText = '';
    result = 0;
    firstOperand = 0;
    secondOperand = 0;
    isDisplayEmpty = true;
    operator = '';
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
        return (display.innerText = 'Division by ZERO');
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
            // alert('Error');
            display.innerText = 'ERROR. Press C to clear';
            break;
    }
}
