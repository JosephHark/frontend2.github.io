const flash = "Flash";
const aquaman = "Aquaman";
const heroes = getElementById("rooster");

heroes.appendChild(flash);
heroes.insertBefore(aquaman, wonderWoman);
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText, oldText);