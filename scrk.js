// Simple calculator - all in one file
let currentInput = '';
let previousInput = '';
let currentOperator = '';

function updateDisplay(value) {
    const display = document.getElementById('display');
    if (display) {
        display.innerText = value || '0';
    } else {
        console.log('Display not found!');
    }
}

function appendNumber(num) {
    console.log('Number clicked: ' + num); // For debugging
    currentInput += num;
    updateDisplay(currentInput);
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function appendOperator(op) {
    console.log('Operator clicked: ' + op); // For debugging
    
    if (currentInput === '' && previousInput === '') return;
    
    if (currentInput !== '') {
        if (previousInput !== '' && currentOperator !== '') {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '';
    }
    
    currentOperator = op;
    
    let displayOp = op;
    if (op === '*') displayOp = '×';
    if (op === '/') displayOp = '÷';
    updateDisplay(previousInput + ' ' + displayOp);
}

function calculate() {
    console.log('Calculate clicked'); // For debugging
    
    if (previousInput === '' || currentInput === '' || currentOperator === '') return;
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    
    if (isNaN(num1) || isNaN(num2)) {
        updateDisplay('Error');
        clearDisplay();
        return;
    }
    
    let result;
    switch(currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                updateDisplay('Error');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    result = Math.round(result * 1000000) / 1000000;
    
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updateDisplay(result);
}

function clearDisplay() {
    console.log('Clear clicked'); // For debugging
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    updateDisplay('0');
}

// Test if script is loaded
console.log('Calculator script loaded!');