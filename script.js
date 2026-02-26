// Simple calculator with global variables
let currentInput = '';
let previousInput = '';
let currentOperator = '';

function getDisplay() {
    return document.getElementById('display');
}

function updateDisplay(value) {
    const display = getDisplay();
    if (display) {
        display.innerText = value || '0';
    }
}

function appendNumber(num) {
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
    // If no numbers entered yet, do nothing
    if (currentInput === '' && previousInput === '') return;
    
    // If we have a current number, move it to previous
    if (currentInput !== '') {
        // If we already have a previous number and operator, calculate first
        if (previousInput !== '' && currentOperator !== '') {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '';
    }
    
    // Store the operator
    currentOperator = op;
    
    // Show what's happening on display
    let displayOp = op;
    if (op === '*') displayOp = '×';
    if (op === '/') displayOp = '÷';
    updateDisplay(previousInput + ' ' + displayOp);
}

function calculate() {
    // Make sure we have everything needed
    if (previousInput === '' || currentInput === '' || currentOperator === '') return;
    
    // Convert strings to numbers
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    
    // Check if valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        updateDisplay('Error');
        clearDisplay();
        return;
    }
    
    // Perform calculation
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
    
    // Round to avoid floating point issues
    result = Math.round(result * 1000000) / 1000000;
    
    // Update for next calculation
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updateDisplay(result);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    updateDisplay('0');
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
});