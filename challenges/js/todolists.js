locatArray = new Array();

function newElement() {
    var fieldValue = document.getElementById("input").value;

    var arrayOfLinks = localStorage.getItem("weather_urls");
    if(!arrayOfLinks){
        arrayOfLinks = []; // this is better way how to declare array not new Array()
    }
    arrayOfLinks.push(fieldValue);
    localStorage.setItem("weather_urls", arrayOfLinks);
}

window.onload = function load() {
    var storedValue = localStorage.getItem("weather_urls");
    if(storedValue) {
        document.getElementById("display").innerHTML = storedValue;
    }
}