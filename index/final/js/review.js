import ToDoList from "./lists.js"
import ToDoItem from "./reviews.js"

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
        //Procedural
        loadListObj();
        refreshThePage();
    })
};

const loadListObj = () => {
    const storedList = localStorage.getItem("reviewList");
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item, itemObj._date, itemObj._name);
        toDoList.AddItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    renderList();
    clearItemEntryfield();
    setFocusonItems();
    clearDateEntryfield();
    // filterList();
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach((item) => {
        buildListItem(item)
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const task = document.createElement("label");
    task.htmlFor = item.getId();
    task.textContent = item.getItem();

    const name = document.createElement("text");
    const a = " wrote: "
    name.textContent = item.getName() + a;

    const region = document.createElement("label");
    region.textContent = item.getRegion();

    const br = document.createElement("br");


    div.appendChild(name);
    div.appendChild(br);
    div.appendChild(task);
    div.appendChild(region);

    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const updatePersistentDate = (listArray) => {
    localStorage.setItem("reviewList", JSON.stringify(listArray));
};

const clearItemEntryfield = () => {
    document.getElementById("newItem").value = " ";
};

const setFocusonItems = () => {
    document.getElementById("newItem").focus();
};

const clearDateEntryfield = () => {
    document.getElementById("newItemDate").value = " ";
};
/*
const filterList = () => {
    filterAll();
    filterne();
    filternw();
    filterse();
    filtersw();
};

const filterAll = () => {
    const showAll = document.getElementById("all");
    showAll.addEventListener("click", (event) => {
        var item = document.getElementsByClassName("item");
        var active = document.getElementsByClassName("active");
        var completed = document.getElementsByClassName("completed");

        if (active.style.display === 'none' || completed.style.display === 'none') {
            item.style.display = 'block';
        };
    });
};
*/

const processSubmission = () => {
    const newEntryText = getNewEntry();
    const newEntryname = getNewName();
    const newEntryRegion = getNewRegion();

    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText, newEntryname, newEntryRegion);
    toDoList.AddItemToList(toDoItem);
    updatePersistentDate(toDoList.getList());
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value;
};

const getNewName = () => {
    return document.getElementById("newName").value;
};

const getNewRegion = () => {
    var region;
    switch (region) {
        case 'ne':
            div.classList.add("ne");
            break;
        case 'nw':
            div.classList.add("nw");
            break;
        case 'se':
            div.classList.add("se");
            break;
        case 'sw':
            div.classList.add("sw");
            break;
    }
    return document.getElementById("region") === region;
};

const calcNextItemId = () => {
    let nexItemId = 1;
    const ToDoList = toDoList.getList();
    if (ToDoList.length > 0) {
        nexItemId = ToDoList[ToDoList.length - 1].getId() + 1;
    }
    return nexItemId;
};

const createNewItem = (itemId, itemText, itemName) => {
    const toDo = new ToDoItem()
    toDo.setId(itemId);
    toDo.setItem(itemText);
    toDo.setName(itemName);
    return toDo;
};