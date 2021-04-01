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
    clearDateEntryfield();
    filterList();
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
    div.classList.add("item", "active");

    const remove = document.createElement("input");
    remove.type = "checkbox";
    remove.tabIndex = 0;
    addCompleted(remove);

    const task = document.createElement("label");
    task.htmlFor = item.getId();
    task.textContent = item.getItem();

    const taskDate = document.createElement("date");
    taskDate.textContent = item.getDate();
    taskDate.className = "date"

    const deleted = document.createElement("input");
    deleted.type = "checkbox";
    deleted.id = item.getId();
    deleted.tabIndex = 0;
    addDeleted(deleted);
    deleted.className = "deletedBox"

    div.appendChild(remove);
    div.appendChild(task);
    div.appendChild(taskDate);
    div.appendChild(deleted);

    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const addDeleted = (deleted) => {
    deleted.addEventListener("click", (event) => {
        toDoList.removeItemFromList(deleted.id);
        updatePersistentDate(toDoList.getList())
        setTimeout(() => {
            refreshThePage();
        }, 1250);
    });
};

const addCompleted = (remove) => {
    remove.addEventListener("click", (event) => {
        var list = document.querySelectorAll('.item');
        list.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.add('completed');
                item.classList.remove('active');
            });
        });
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

const clearDateEntryfield = () => {
    document.getElementById("newItemDate").value = " ";
};
const filterList = () => {
    filterAll();
    filterCompleted();
    filterActive();
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

const filterCompleted = () => {

    const showAll = document.getElementById("all");
    showAll.addEventListener("click", (event) => {
        var active = document.getElementsByClassName("active");
        var completed = document.getElementsByClassName("completed");

        if (completed.style.display === 'none') {
            completed.style.display = 'block';
            active.style.display = 'none';
        };
    });
};

const filterActive = () => {

    const showAll = document.getElementById("all");
    showAll.addEventListener("click", (event) => {
        var active = document.getElementsByClassName("active");
        var completed = document.getElementsByClassName("completed");

        if (active.style.display === 'none') {
            active.style.display = 'block';
            completed.style.display = 'none';
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
    return document.getElementById("newItemDate").value;
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