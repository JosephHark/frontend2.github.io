import Todo from './todolists.js';
//on load grab the array and insert it into the page
const myToDoList = new items('items');
window.addEventListener('load', () => {
    myToDoList.showToDoList();
}); 
