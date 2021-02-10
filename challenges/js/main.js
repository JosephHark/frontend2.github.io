import ToDoList from "./lists.js"
import ToDoItem from "./todoitems.js"

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // Add listeners
    const storeList = document.getElementById("storeList");
    storeList.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    //Procedural
    loadListObj();
    refreshPage();
};

const loadListObj = () =>{
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") return;
    const parsedList =JSON.parse(storedList);
    parsedList.forEach(itemObj =>{
        const newToDoItem = createNewItem(itemObj._id, itemObj._item);
        toDoList.AddItemToList(newToDoItem);
    });
};

const refreshPage = () => {
    clearList();
    renderList();
    clearItemEntryfield();
    setFocusonItems();
};

const clearList = () => {
    const parentElement = document.getElementById("newItem");
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
        buildListItem(item);
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListener(check);
    const container = document.getElementById("storeList");
    container.appendChild(div);
};

const addClickListener = (checkbox) => {
    checkbox.addClickListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id)
        updatePersistentDate(toDoList.getList());
        setTimeout(() => {
            refreshPage();
        }, 5000);
    })
};

const updatePersistentDate = (listArray) =>{
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
    if (getNewEntry.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.AddItemToList(toDoItem);
    updatePersistentDate(toDoList.getList());
    refreshPage();

};

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
    let nexItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nexItemId = list(list.length - 1).getId() + 1;
    }
    return nexItemId;
};

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
};