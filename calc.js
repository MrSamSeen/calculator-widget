let display = document.getElementById('display');
let currentValue = '0';
let lastOperator = '';
let shouldClearDisplay = false;
console.log("Calculator loaded");

function updateDisplay() {
    display.textContent = currentValue;
    console.log(currentValue);
}

function appendToDisplay(value) {
    if (shouldClearDisplay && !isOperator(value)) {
        currentValue = value;
        shouldClearDisplay = false;
    } else if (currentValue === '0' && value !== '.') {
        currentValue = value;
    } else if (isOperator(value) && isOperator(lastOperator)) {
        currentValue = currentValue.slice(0, -1) + value;
    } else {
        currentValue += value;
    }

    lastOperator = isOperator(value) ? value : '';
    updateDisplay();
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        //shouldClearDisplay = true;
        lastOperator = '';
    } catch (error) {
        currentValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();