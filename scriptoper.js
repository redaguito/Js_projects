function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
        return;
    }
    
    const operation = document.querySelector('input[name="operation"]:checked');

    if (!operation) {
        document.getElementById('result').innerHTML = 'Please select an operation';
        return;
    }
    
    let result;

    switch(operation.value) {
        case 'add':
            result = num1 + num2;
            break;
            
        case 'subtract':
            result = num1 - num2;
            break;
            
        case 'multiply':
            result = num1 * num2;
            break;
            
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').innerHTML = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
            
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerHTML = result;
}