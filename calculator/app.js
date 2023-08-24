function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    const screenValue = document.getElementById('screen').value;
    try {
        const result = eval(screenValue);
        document.getElementById('screen').value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

function clearScreen() {
    document.getElementById('screen').value = '';
}
function backspace() {
    let displayValue = document.getElementById("screen").value;
    document.getElementById("screen").value = displayValue.slice(0, -1);
  }
  function calculatePercentage() {
    let currentValue = document.getElementById('screen').value;
    let result = eval(currentValue) / 100;
    document.getElementById('screen').value = result;
  }