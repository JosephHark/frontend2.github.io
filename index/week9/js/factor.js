const btn = document.getElementById('rainbow');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);

const form = document.forms[0];
form.addEventListener('submit', factorize, false);
function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();     
    const number = Number(form.number.value);
    document.getElementById('output').innerText = factorsOf(number);  
}