

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const userInput = document.querySelector("#user-input");
const clrBtn = document.querySelector("#clear-btn");
const eqlBtn = document.querySelector("#equals-btn");
const btnContainer = document.querySelector("#btn-container");

numbers.forEach(btn => btn.addEventListener("click",e => userInput.value += `${e.target.textContent}`));
operators.forEach(btn => btn.addEventListener("click",e => userInput.value += ` ${e.target.textContent} `));
clrBtn.addEventListener("click",() => userInput.value="");
eqlBtn.addEventListener("click", getResult);
// window.addEventListener("keypress",getResult);

console.log("-5.2"-"2");



//function section

function getResult(){
    
    let inpt = userInput.value.replace(/ /g,"") + "";
   
    // bug reports
    if(inpt === "")                {alert("input has to be mathematic expression");return;}
    if(inpt.match(/^[*/]/))        {alert("input must not start with * or /");return;}
    if(inpt.match(/[^0-9 +-/*]/g)) {alert("input must not contain other than calculator symbols");return;}
    if(isNaN(inpt[inpt.length-1])) {alert("input must end with number");return;}
    if(inpt.match(/[-+*/]{2,}/))   {alert("input must not contain more than 1 sign after one another");return;}
    
    // ignores all + and - and evaluates all * and / expressions
    let store = inpt.split(/[-+]/);
    if(inpt[0] === "-" || inpt[0] === "+")
    {
        store.shift();
        store[0] = inpt[0] + store[0];
        inpt = inpt.split("");
        inpt.shift();
        inpt = inpt.join("");
    }
    console.log(inpt);
    store = store.map(operate);
    console.log(store);

    
    // putting + and - to the places where they belong (replacing spaces) and evaluates the rest of the expression
    store = store.join(" ").split("");
    let plusMinusSigns = inpt.match(/[-+]/g);
    console.log(store);

    for (let i = index = 0; i < store.length; i++)
        if(store[i] === " ")
            store[i] = plusMinusSigns[index++];
    
    console.log(store);
    
    let result = [store.join("")].map(operate).join("");
    userInput.value = result;
   
}

function operate(x)
{
    

    let left = x.match(/[-+]?[0-9.]+/) + "";
    let operand = "";
    let right = "";
    let counter = 0;
    for (let i = left.length; i < x.length; counter++) {
        
        if(counter%2 === 0)
        {
            operand = x[i];
            i++;
        }
        else
        {
            right = x.slice(i).match(/[0-9.]+/);

            switch(operand)
            {
                case "+":
                    left = add(left,right);
                    break;
                case "-":
                    left = subtract(left,right);
                    break;
                case "*":
                    left = multiply(left,right);
                    break;
                case "/":
                    left = divide(left,right);
                    break;
            }
            i+=right.length;
        }
    }
    return left;
}

// operator functions (add is *1 bcs of string)

function add(){
    return [...arguments].reduce((a,b) => a*1 + b*1);
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

