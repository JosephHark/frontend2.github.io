// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
  name: 'a1',
  state: 'a2',
  fact: 'a3',
  img: 'a4',
  imgAlt: 'a5',
  indoor: 'a6',
  description: 'a7',
  img2: 'a9',
  imgAlt2: 'a10',
  img3: 'a11',
  imgAlt3: 'a12'
}];

export default class Hikes {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
    this.backButton = this.buildBackButton();
  }
  // why is this function necessary?  locationList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of locations outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
  getAllHikes() {
    return locationList;
  }
  // For the first stretch we will need to get just one location.
  getHikeByName(locationName) {
    return this.getAllHikes().find(location => location.name === locationName);
  }
  //show a list of locations in the parentElement
  showHikeList() {
    this.parentElement.innerHTML = '';
    // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    renderHikeList(this.parentElement, this.getAllHikes());
    this.addHikeListener();
    // make sure the back button is hidden
    this.backButton.classList.add('hidden');
  }
  // show one location with full details in the parentElement
  showOneHike(locationName) {
    const location = this.getHikeByName(locationName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(renderOneHikeFull(location));
    // show the back button
    this.backButton.classList.remove('hidden');
  }
  // in order to show the details of a location ontouchend we will need to attach a listener AFTER the list of locations has been built. The function below does that.
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
    backButton.addEventListener('click', () => {
      this.showHikeList();
    });
    backButton.classList.add('hidden');
    this.parentElement.before(backButton);
    return backButton;
  }
}
// End of Hikes class
// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderHikeList(parent, locations) {
  locations.forEach(location => {
    parent.appendChild(renderOneHikeLight(location));
  });
}

function renderOneHikeLight(location) {
  const item = document.createElement('ol');
  item.classList.add('light');
  // setting this to make getting the details for a specific location easier later.
  item.setAttribute('data-name', location.name);
  item.setAttribute('data-state', location.state);
  item.innerHTML =
` <h2>${location.name}</h2>
 <h2>${location.state}</h2>
<div class="image"><img src="${location.imgSrc}" alt="${location.imgAlt}"></div>
<div>
      <div>
          <h3>Fun Fact</h3>
          <p>${location.fact}</p>
      </div>
      <div>
          <h3>Is this in indoor or outside?</h3>
          <p>This is ${location.indoor}</p>
      </div>
</div>`;

  return item;
}

function renderOneHikeFull(location) {
  const item = document.createElement('ol');
  item.innerHTML = ` 
  
  
 <div class="image"><img src="${location.img}" alt="${location.imgAlt}"></div>
 <div>
 <h2>${location.name}</h2>
  <h2>${location.state}</h2>
       <div>
           <h3>Distance</h3>
           <p>${location.fact}</p>
       </div>
       <div>
           <h3>Is this indoor or outside?</h3>
           <p>This is ${location.indoor}</p>
       </div>
          <h3>Description</h3>
          <p>${location.description}</p>
      </div>
      <div>
          <h3>More Pictures</h3>
          <div class="image"><img src="${location.img2}" alt="${location.img2}"></div>
          <div class="image"><img src="${location.img3}" alt="${location.img3}"></div>
          </div>
  
  `;
  return item;
}