import ToDoList from "./lists.js"
import ToDoItem from "./todoitems.js"

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) =>{
    if (event.target.readyState ==="complete"){
        initApp();
    }
})