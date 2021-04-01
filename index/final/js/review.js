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
        const newToDoItem = createNewItem(itemObj._id, itemObj._item, itemObj._date);
        toDoList.AddItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    renderList();
    clearItemEntryfield();
    setFocusonItems();
    clearDateEntryfield();
    filterList();
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach((item) => {
        buildListItem(item)
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.classList.add("item", "active");

    const task = document.createElement("label");
    task.htmlFor = item.getId();
    task.textContent = item.getItem();

    const taskDate = document.createElement("date");
    taskDate.textContent = item.getDate();
    taskDate.className = "date"

    //Create array of options to be added
    var array = ["North East", "North West", "South East", "South West"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    div.appendChild(task);
    div.appendChild(taskDate);
    div.appendChild(selectList);

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

const processSubmission = () => {
    const newEntryText = getNewEntry();
    const newEntryDate = getNewDate();

    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText, newEntryDate);
    toDoList.AddItemToList(toDoItem);
    updatePersistentDate(toDoList.getList());
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value;
};

const getNewDate = () => {
    var d = new Date();
    var n = d.getDate();
    var m = d.getMonth();
    var y = d.getFullYear();
    var f = n + m + y;
        document.getElementById("newItemDate").innerHTML = f;
};

const calcNextItemId = () => {
    let nexItemId = 1;
    const ToDoList = toDoList.getList();
    if (ToDoList.length > 0) {
        nexItemId = ToDoList[ToDoList.length - 1].getId() + 1;
    }
    return nexItemId;
};

const createNewItem = (itemId, itemText, itemDate) => {
    const toDo = new ToDoItem()
    toDo.setId(itemId);
    toDo.setItem(itemText);
    toDo.setDate(itemDate);
    return toDo;
};