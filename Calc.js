// Calculator Program

const display = document.getElementById("display");
let memory = 0;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
function memoryClear() {
    memory = 0;
}
function memorySave() {
    memory = parseFloat(display.value) || 0;
}
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function clearEntry() {
    display.value = "";
}
function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value)) || 0;
}
function percent() {
    display.value = parseFloat(display.value) / 100;
}
function reciprocal() {
    const val = parseFloat(display.value);
    display.value = val !== 0 ? 1 / val : "Error";
}
function toggleSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

let isRetro = false;

function toggleMode() {
    isRetro = !isRetro;
    document.body.className = isRetro ? "retro-mode" : "WdwXP-mode";
    document.getElementById("mode-toggle").innerText = isRetro ? "Switch to Modern Mode" : "Switch to Retro Mode";
}
