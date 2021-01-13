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