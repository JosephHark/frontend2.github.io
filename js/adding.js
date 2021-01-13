function addfunction() {
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