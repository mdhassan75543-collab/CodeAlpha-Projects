const display = document.getElementById("display");


// Add number to display
function appendNumber(number) {

    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}


// Add operator
function appendOperator(operator) {

    const lastCharacter =
        display.value[display.value.length - 1];

    // Prevent two operators together
    if ("+-*/%".includes(lastCharacter)) {
        return;
    }

    display.value += operator;
}


// Clear display
function clearDisplay() {
    display.value = "0";
}


// Delete last character
function deleteNumber() {

    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value =
            display.value.slice(0, -1);
    }
}


// Calculate result
function calculate() {

    try {

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        let result = Function(
            `"use strict"; return (${expression})`
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers and decimal
    if (
        (key >= "0" && key <= "9") ||
        key === "."
    ) {
        appendNumber(key);
    }

    // Operators
    else if ("+-*/%".includes(key)) {
        appendOperator(key);
    }

    // Enter or =
    else if (key === "Enter" || key === "=") {
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteNumber();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }

});