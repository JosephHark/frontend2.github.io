// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.
var myInput   = document.getElementById("myInput").value;

var toDoList = [ myInput, date ];
  
  export default class Todo {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.backButton = this.buildBackButton();
    }

    // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
    getAllItems() {
      return toDoList;
    }
    /*// For the first stretch we will need to get just one hike.
    getToDoByName(hikeName) {
      return this.getAllItems().find(hike => hike.name === hikeName);
    }*/
    //show a list of hikes in the parentElement

    showToDoList() {
      this.parentElement.innerHTML = '';
      // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
      renderToDoList(this.parentElement, this.getAllItems());
      this.addToDoListener();
      // make sure the back button is hidden
      this.backButton.classList.add('hidden');
    }
    // show one hike with full details in the parentElement
    showOneHike(hikeName) {
      const hike = this.getHikeByName(hikeName);
      this.parentElement.innerHTML = '';
      this.parentElement.appendChild(renderOneHikeFull(hike));
      // show the back button
      this.backButton.classList.remove('hidden');
    }
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
      // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
      const childrenArray = Array.from(this.parentElement.children);
      childrenArray.forEach(child => {
        child.addEventListener('touchend', e => {
          // why currentTarget instead of target?
          this.showOneHike(e.currentTarget.dataset.name);
        });
      });
    }
    buildBackButton() {
      const backButton = document.createElement('button');
      backButton.innerHTML = '&lt;- All Hikes';
      backButton.addEventListener('touchend', () => {
        this.showHikeList();
      });
      backButton.classList.add('hidden');
      this.parentElement.before(backButton);
      return backButton;
    }
  }
  // End of Hikes class
  // methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
  function renderToDoList(parent, todo) {
    todo.forEach(todo => {
      parent.appendChild(renderalltodo(todo));
    });
  }

  function renderalltodo(todo) {
    const item = document.createElement('li');
    item.classList.add('active');


    // setting this to make getting the details for a specific hike easier later.
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  
    return item;
  }  