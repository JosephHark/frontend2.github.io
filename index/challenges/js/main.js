import ToDoList from "./lists.js"
import ToDoItem from "./todoitems.js"

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        inItApp();
    }
});

const inItApp = () => {
    // Add listeners
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clearItems");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Are you sure that you want to clear the entire list?");
            if (confirmed) {
                toDoList.clearList();

                refreshThePage();
            };
        };
    });
    //Procedural
    loadListObj();
    refreshThePage();
};

const loadListObj = () => {
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item, itemObj._date);
        toDoList.AddItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryfield();
    setFocusonItems();
};

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach((item) => {
        buildListItem(item)
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";

    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.id = item.getId();
    complete.tabIndex = 0;
    addCompleted(complete);

    /*processSubmission()*/

    const deleted = document.createElement("input");
    deleted.type = "checkbox";
    deleted.tabIndex = 0;
    addDeleted(deleted);

    const task = document.createElement("label");
    task.htmlFor = item.getId();
    task.textContent = item.getItem();

    /*const taskDate = document.createElement("date");
    date.textContent = date.getDate();*/
    

    div.appendChild(complete);
    div.appendChild(task);
    //div.appendChild(taskDate);
    div.appendChild(deleted);

    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const addDeleted = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        var list = document.querySelector('div');
        list.classList.add("deleted")
    });
};

const addCompleted = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        var list = document.querySelector('div');
        list.classList.add("completed")
    });
};

const updatePersistentDate = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray));
};

const clearItemEntryfield = () => {
    document.getElementById("newItem").value = " ";
};

const setFocusonItems = () => {
    document.getElementById("newItem").focus();
};

const processSubmission = () => {
    const newEntryText = getNewEntry();
 //   const newEntryDate = getNewDate();

    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.AddItemToList(toDoItem);
    updatePersistentDate(toDoList.getList());
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value;
};
/*
const getNewDate = () => {
    return document.getElementById("newItemDate").value;
};*/

const calcNextItemId = () => {
    let nexItemId = 1;
    const ToDoList = toDoList.getList();
    if (ToDoList.length > 0) {
        nexItemId = ToDoList[ToDoList.length - 1].getId() + 1;
    }
    return nexItemId;
};

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem()
    toDo.setId(itemId);
    toDo.setItem(itemText);
 //   toDo.setDate(itemDate);
    return toDo;
};