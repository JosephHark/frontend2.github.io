// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
    name: 'Everglades National Park ',
    state: 'Florida',
    fact: 'The Everglades National Park, with its lush forests and wetlands making up the largest tropical wilderness in the country.',
    img: '109859168-adb93980-7c2a-11eb-89d1-f988ddb7ddd5.jpg',
    imgAlt: 'Image of sunset in the Florida Everygreens',
    indoor: 'outside',
    description: 'The park is the largest tropical wilderness in the United States, and the largest wilderness of any kind east of the Mississippi River. Everglades is the third-largest national park in the contiguous United States after Death Valley and Yellowstone.',
    img2: '109859169-ae51d000-7c2a-11eb-9b30-183e8d6eff72.jpg',
    imgAlt2: 'Boardwalk in Florida Evergreens',
    img3: '109859201-b3168400-7c2a-11eb-9c24-52014f3be52e.jpg',
    imgAlt3: 'evergreen florida'
  },{
    name: 'Georgia Aquarium',
    state: 'Georgia',
    fact: "There's more than 10 million gallons of water.",
    img: '109859172-aeea6680-7c2a-11eb-8e95-b07f2e6783a3.jpg',
    imgAlt: 'Image of the Georgia Aquarium',
    indoor: 'inside',
    description: 'Georgia Aquarium is home to hundreds of species and thousands of animals across its seven major galleries, all of which reside in more than 10 million US gallons (38,000 m3) of fresh and saltwater. It was the largest aquarium in the world from its opening in 2005 until 2012 when it became the third-largest aquarium in the world after the Marine Life Park in Singapore and the Chimelong Ocean Kingdom in China; the Georgia Aquarium remains the largest aquarium in the United States and in the Western Hemisphere.',
    img2: '109859202-b3168400-7c2a-11eb-8221-5a23c3479004.jpg',
    imgAlt2: 'Georgia Aquarium',
    img3: '',
    imgAlt3: 'Georgia Aquarium'
  },{
    name: 'Monument Rocks',
    state: 'Kansas',
    fact: 'These rocks are more than 80 million years old.',
    img: '109859233-b7db3800-7c2a-11eb-8b87-9696012dd09c.jpg',
    imgAlt: 'Monument Rocks',
    indoor: 'outside',
    description: 'Monument Rocks (also Chalk Pyramids) are a series of large chalk formations in Gove County, Kansas, rich in fossils. The carbonate deposits were laid down during the Cretaceous Period in what was then the Western Interior Seaway, which split the continent of North America into two landmasses. They are estimated to have been formed 80 million years ago.',
    img2: '109859195-b1e55700-7c2a-11eb-9657-0848ef444c63.jpg',
    imgAlt2: 'monument rocks',
    img3: '109859234-b7db3800-7c2a-11eb-9962-f77b8d9e28ae.jpg',
    imgAlt3: 'Monument Rocks'
  },{
    name: 'Charleston ',
    state: 'South Carolina',
    fact: 'Whether you’re interested in the Civil War or just want to wander the handsome streets, explore Charleston Waterfront, and take in the Southern charm, it ticks boxes for history lovers and romantic couples alike.',
    img: '109859198-b27ded80-7c2a-11eb-8bdb-f97e897f671c.jpg',
    imgAlt: 'Charleston',
    indoor: 'inside and outside',
    description: "Charleston played a major part in the Civil War. As a pivotal city, both the Union and Confederate Armies vied for power. The war ended mere months after the Union forces took control of Charleston. Not only did the Civil War end not long after Charleston's surrender, but the Civil War began there.",
    img2: '109859183-af82fd00-7c2a-11eb-8a48-9e1d04004508.jpg',
    imgAlt2: 'Charleston',
    img3: '',
    imgAlt3: 'Charleston'
  }
  ];
  const imgBasePath = "https://user-images.githubusercontent.com/71291466/";
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
      console.log("this is test one");
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
  <div class="image"><img src="${imgBasePath}${location.img}" alt="${location.imgAlt}"></div>
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
    console.log("hi");
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