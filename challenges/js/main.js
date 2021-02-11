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
        const newToDoItem = createNewItem(itemObj._id, itemObj._item);
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

    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getId();
    div.appendChild(line);
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const addClickListener = (checkbox) => {
    checkbox.addClickListener("click", (event) => {
        element.classList.add("completed")
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
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.AddItemToList(toDoItem);
    updatePersistentDate(toDoList.getList());
    refreshThePage();
};

const getNewEntry = () => {
    const text = document.getElementById("newItem").value.trim();
    const date = document.getElementById("newItemDate").value.trim();
    text.appendChild(date);
    return text;
};

const calcNextItemId = () => {
    let nexItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nexItemId = list[list.length - 1].getId() + 1;
    }
    return nexItemId;
};

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
};