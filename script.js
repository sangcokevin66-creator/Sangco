// 1. Store the current input string
let input = "";

// 2. Function to handle button press and update display
function press(value) {
  input += value;
  document.getElementById('display').value = input;
}

// 3. Function to calculate the result of the expression
function calculate() {
  try {
    let result = eval(input);
    document.getElementById('display').value = result;
    input = result.toString();
  } catch (e) {
    document.getElementById('display').value = "Error";
    input = "";
  }
}

// 4. Function to clear the display and reset input
function clearDisplay() {
  input = "";
  document.getElementById('display').value = "";
}

// 5. Function to remove the last character (optional)
function backspace() {
  input = input.slice(0, -1);
  document.getElementById('display').value = input;
}
