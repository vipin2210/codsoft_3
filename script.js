// Js file for calculator project.

var buttons = document.getElementsByClassName("input_button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;    

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if (isOperator(value)) {
            //save operator
            //save operand1
            //clear display screen
            operator = value;
            operand1 = parseFloat(text);
            display.innerText = "";  
        }
        else if (value == "ac") {
            display.innerText = " ";
        }
        else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.innerText = operand1;
        }
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.innerHTML = text + '.';
            }
        }
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.innerText = operand1;
        }
        else if (value == "=") {
            //first save second operator
            //second evaluate and display in display box
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else {
            display.textContent += value;
        }
    });
}