const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
let expression = "";

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            expression = "";
            resultDisplay.innerText = "0";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
        } else if (value === "=") {
            try {
                const result = eval(expression);
                resultDisplay.innerText = result;
                expression = result.toString();
            } catch {
                resultDisplay.innerText = "Error";
                resultDisplay.classList.add("error-text");
                expression = "";

                // Remove the class after animation completes
                setTimeout(() => {
                    resultDisplay.classList.remove("error-text");
                }, 500); // Duration matches the animation
            }
            
        } else {
            expression += value;
        }

        expressionDisplay.innerText = expression;
    });
});
