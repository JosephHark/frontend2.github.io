// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
  name: 'Bechler Falls',
  imgSrc: 'falls.jpg',
  imgAlt: 'Image of Bechler Falls',
  distance: '3 miles',
  difficulty: 'Easy',
  description: 'Beautiful short location along the Bechler river to Bechler Falls',
  directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
},
{
  name: 'Teton Canyon',
  imgSrc: 'falls.jpg',
  imgAlt: 'Image of Bechler Falls',
  distance: '3 miles',
  difficulty: 'Easy',
  description: 'Beautiful short (or long) location through Teton Canyon.',
  directions: 'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
},
{
  name: 'Denanda Falls',
  imgSrc: 'falls.jpg',
  imgAlt: 'Image of Bechler Falls',
  distance: '7 miles',
  difficulty: 'Moderate',
  description: 'Beautiful location through Bechler meadows river to Denanda Falls',
  directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
}
];

const imgBasePath = '//byui-cit.github.io/cit261/examples/';

export default class Locations {
constructor(elementId) {
  this.parentElement = document.getElementById(elementId);
  // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
  this.backButton = this.buildBackButton();
}
// why is this function necessary?  locationList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of locations outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
getAllLocations() {
  return locationList;
}
// For the first stretch we will need to get just one location.
getLocationByName(locationName) {
  return this.getAllLocations().find(location => location.name === locationName);
}
//show a list of locations in the parentElement
showLocationList() {
  this.parentElement.innerHTML = '';
  // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
  renderLocationList(this.parentElement, this.getAllLocations());
  this.addLocationListener();
  // make sure the back button is hidden
  this.backButton.classList.add('hidden');
}
// show one location with full details in the parentElement
showOneLocation(locationName) {
  const location = this.getLocationByName(locationName);
  this.parentElement.innerHTML = '';
  this.parentElement.appendChild(renderOneLocationFull(location));
  // show the back button
  this.backButton.classList.remove('hidden');
}
// in order to show the details of a location ontouchend we will need to attach a listener AFTER the list of locations has been built. The function below does that.
addLocationListener() {
  // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
  const childrenArray = Array.from(this.parentElement.children);
  childrenArray.forEach(child => {
    child.addEventListener('touchend', e => {
      // why currentTarget instead of target?
      this.showOneLocation(e.currentTarget.dataset.name);
    });
  });
}
buildBackButton() {
  const backButton = document.createElement('button');
  backButton.innerHTML = '&lt;- All Locations';
  backButton.addEventListener('touchend', () => {
    this.showLocationList();
  });
  backButton.classList.add('hidden');
  this.parentElement.before(backButton);
  return backButton;
}
}
// End of Locations class
// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderLocationList(parent, locations) {
locations.forEach(location => {
  parent.appendChild(renderOneLocationLight(location));
});
}

function renderOneLocationLight(location) {
const item = document.createElement('li');
item.classList.add('light');
// setting this to make getting the details for a specific location easier later.
item.setAttribute('data-name', location.name);
item.innerHTML = ` <h2>${location.name}</h2>
<div class="image"><img src="${imgBasePath}${location.imgSrc}" alt="${location.imgAlt}"></div>
<div>
      <div>
          <h3>Distance</h3>
          <p>${location.distance}</p>
      </div>
      <div>
          <h3>Difficulty</h3>
          <p>${location.difficulty}</p>
      </div>
</div>`;

return item;
}

function renderOneLocationFull(location) {
const item = document.createElement('li');
item.innerHTML = ` 
  
      <img src="${imgBasePath}${location.imgSrc}" alt="${location.imgAlt}">
      <h2>${location.name}</h2>
      <div>
          <h3>Distance</h3>
          <p>${location.distance}</p>
      </div>
      <div>
          <h3>Difficulty</h3>
          <p>${location.difficulty}</p>
      </div>
      <div>
          <h3>Description</h3>
          <p>${location.description}</p>
      </div>
      <div>
          <h3>How to get there</h3>
          <p>${location.directions}</p>
      </div>
  
  `;
return item;
}