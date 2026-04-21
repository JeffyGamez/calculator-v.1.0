// Get references to the HTML elements
const num1Input = document.getElementById('num1');
const operationInput = document.getElementById('operation');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const resultDisplay = document.getElementById('resultDisplay');

// Add an event listener to the button
calculateBtn.addEventListener('click', calculate);

function calculate() {
    // Clear previous error/result
    resultDisplay.style.color = '#333'; // Reset color
    resultDisplay.textContent = '';

    // Get values from input fields
    const num1Str = num1Input.value;
    const op = operationInput.value.trim(); // .trim() removes whitespace
    const num2Str = num2Input.value;

    // Convert to numbers
    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    // Basic validation for numbers
    if (isNaN(num1) || num1Str === "") {
        resultDisplay.textContent = 'ERROR: First number is invalid.';
        resultDisplay.style.color = 'red';
        return;
    }
    if (isNaN(num2) || num2Str === "") {
        resultDisplay.textContent = 'ERROR: Second number is invalid.';
        resultDisplay.style.color = 'red';
        return;
    }

    let result = 0;
    let error = '';

    // Perform the operation, similar to your Python code
    if (op === '+') {
        result = num1 + num2;
    } else if (op === '-') {
        result = num1 - num2;
    } else if (op === '*' || op.toLowerCase() === 'x') { // Handle 'x' and 'X' for multiplication
        result = num1 * num2;
    } else if (op === '/') {
        if (num2 === 0) {
            error = 'ERROR: Cannot divide by zero!';
        } else {
            result = num1 / num2;
        }
    } else {
        error = 'ERROR: Invalid operation. Accepted: +, -, *, /';
    }

    // Display the result or error
    if (error) {
        resultDisplay.textContent = error;
        resultDisplay.style.color = 'red';
    } else {
        resultDisplay.textContent = `The result is: ${result}`;
    }
}
