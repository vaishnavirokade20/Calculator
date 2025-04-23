// Get the display input element
const display = document.getElementById("display");

// Get all input buttons inside the calculator
const buttons = document.querySelectorAll(".calculator input[type='button']");

// Loop through all buttons and add event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
