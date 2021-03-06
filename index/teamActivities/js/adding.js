function reqOne() {
    const input = document.getElementById('req1').value;
    const outputElement = document.getElementById('output');

    outputElement.innerHTML = 'You entered: ' + input;
};

function reqTwo() {
    const input = document.getElementById('number').value;
    const outputElement = document.getElementById('total');

    const inputInt = parseInt(input);
    if (inputInt !== NaN) {
        outputElement.innerHTML = 'Total: ' + sum(inputInt);
    }
}

function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

function reqThree() {
    const input1 = document.getElementById('number1').value;
    const input2 = document.getElementById('number2').value;
    const outputElement = document.getElementById('sum');

    const num1Float = parseFloat(input1);
    const num2Float = parseFloat(input2);
    if ((num1Float !== NaN) & (num2Float !== NaN)) {
        const total = num1Float + num2Float;
        outputElement.innerHTML = 'Sum of the numbers entered: ' + total;
    }
}


function Stretch() {
    const stretch1 = document.getElementById('stretch1').value;
    const stretch2 = document.getElementById('stretch2').value;
    const stretchTotal = document.getElementById('stretch');

    const inputInt1 = parseInt(stretch1);
    const inputInt2 = parseInt(stretch2);
    if (inputInt1 !== NaN && inputInt2 !== NaN) {
       let sumTotal = sum(inputInt1) + sum(inputInt2);
        stretchTotal.innerHTML = "Total: " + sumTotal;
    }
}
function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}


function func04add() {
    const first = document.getElementById("input04.1").value;
    const second = document.getElementById("input04.2").value;
    if ((isNaN(first) === false) & (isNaN(second) === false)) {
    const total = parseInt(first) + parseInt(second);
    document.getElementById("output04").innerHTML = "These two numbers added together equals " + total;
    }
    else {
    document.getElementById("output04").innerHTML = "Invalid entry, please try again";
    }
    }
    
    function func04sub() {
    const first = document.getElementById("input04.1").value;
    const second = document.getElementById("input04.2").value;
    if ((isNaN(first) === false) & (isNaN(second) === false)) {
    const total = parseInt(first) - parseInt(second);
    document.getElementById("output04").innerHTML = first + " minus " + second + " equals " + total;
    }
    else {
    document.getElementById("output04").innerHTML = "Invalid entry, please try again";
    }
    }
    
    function func04mult() {
    const first = document.getElementById("input04.1").value;
    const second = document.getElementById("input04.2").value;
    if ((isNaN(first) === false) & (isNaN(second) === false)) {
    const total = parseInt(first) * parseInt(second);
    document.getElementById("output04").innerHTML = first + " times " + second + " equals " + total;
    }
    else {
    document.getElementById("output04").innerHTML = "Invalid entry, please try again";
    }
    }
    
    function func04div() {
    const first = document.getElementById("input04.1").value;
    const second = document.getElementById("input04.2").value;
    if ((isNaN(first) === false) & (isNaN(second) === false)) {
    const total = parseInt(first) / parseInt(second);
    document.getElementById("output04").innerHTML = first + " divided by " + second + " equals " + total;
    }
    else {
    document.getElementById("output04").innerHTML = "Invalid entry, please try again";
    }
    }