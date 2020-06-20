

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const userInput = document.querySelector("#user-input");
const clrBtn = document.querySelector("#clear-btn");
const eqlBtn = document.querySelector("#equals-btn");
const btnContainer = document.querySelector("#btn-container");

numbers.forEach(btn => btn.addEventListener("click",e => userInput.value += `${e.target.textContent}`));
operators.forEach(btn => btn.addEventListener("click",e => userInput.value += ` ${e.target.textContent} `));
clrBtn.addEventListener("click",() => userInput.value="");




function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(mum1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2); 
    }
}

// operator functions

function add(){
    return [...arguments].reduce((a,b) => a + b);
}
function subtract(){
    return [...arguments].reduce((a,b) => a - b);
}
function multiply(){
    return [...arguments].reduce((a,b) => a * b);
}
function divide(){
    return [...arguments].reduce((a,b) => a / b);
}
