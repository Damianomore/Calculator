const buttons = document.querySelectorAll('.btn');
const clearbtn = document.querySelector('.Clear');
const sumBtn = document.querySelector('#equalsBtn');
const currentInput = document.querySelector('.screen-current');
const prevInput = document.querySelector('.screen-before');
let operatorCount = 0;
let currentOperator = "";
let previousOperator ="";

clearbtn.addEventListener('click', () => {
    prevInput.innerHTML = "";
    currentInput.innerHTML = "0";
});
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(currentInput.innerHTML.length === 11) {
            console.error("Max Input Reached");
            return;
        }
        if(btn.hasAttribute("data-operator")) {
            currentOperator = btn.innerHTML;
            operatorCount++;
        }

        if(operatorCount === 2 && btn.hasAttribute("data-operator")) {
            let inputEquation = currentInput.innerHTML.split(`${btn.innerHTML}`);
            operatorCount = 1;
            evaluate(inputEquation[0],previousOperator,inputEquation[1]);
            currentInput.innerHTML = currentInput.textContent + btn.innerHTML;
        }
        if(currentInput.innerHTML === "0" && !btn.hasAttribute("data-operator")) { currentInput.innerHTML = ""};
        currentInput.innerHTML =  currentInput.textContent + btn.innerHTML;

    });
});


function add(num1, num2) {
    return num1 + num2;
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2

}

function subtract(num1, num2) {
    return num1 - num2

}

function evaluate(operand1, operator,operand2) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    switch (operator) {
        case '+':
            let addedNum = add(operand1, operand2);
            currentInput.innerHTML = addedNum;
            prevInput.innerHTML = addedNum;
            break;
        
        case 'x':
            let multNum = multiply(operand1, operand2);
            break;
        
        case '-':
            let subNum = subtract(operand1, operand2);
            break;

        case '÷':
            let divisNum = divide(operand1, operand2);

            break;

        default:
            break;
    }
}

