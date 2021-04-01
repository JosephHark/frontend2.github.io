// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
    name: 'Pictured Rocks National Lakeshore',
    state: 'Michigan',
    fact: 'Expect to see ornate sandstone cliffs and rock formations, cascading waterfalls, and tranquil beaches.',
    img: '109859197-b27ded80-7c2a-11eb-9c91-c8b1fbe3fb6d.jpg',
    imgAlt: 'Pictured Rocks',
    indoor: 'outside',
    description: 'Pictured Rocks derives its name from the 15 miles (24 km) of colorful sandstone cliffs northeast of Munising. The cliffs reach up to 200 feet (60 m) above lake level. They have been naturally sculptured into a variety of shallow caves, arches, and formations resembling castle turrets and human profiles.',
    img2: '109859214-b447b100-7c2a-11eb-8895-33ab230da0ea.jpg',
    imgAlt2: 'Pictured Rocks',
  },{
    name: 'Empire State Building',
    state: 'New York',
    fact: 'Head to the heavens by visiting Mount Washington State Park, which covers the peak of Mount Washington, which is part of the Presidential Range.',
    img: '109859191-b0b42a00-7c2a-11eb-9e82-f099b54d27d2.jpg',
    imgAlt: 'empire state builing',
    indoor: 'indoor and outdoor',
    description:"Its name is derived from Empire State, the nickname of the state of New York. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. The Empire State Building stood as the world's tallest building until the construction of the World Trade Center in 1970." ,
    img2: '109859200-b27ded80-7c2a-11eb-8754-8478b65a8924.jpg',
    imgAlt2: 'sunset on empire state building',
  },{
    name: 'One World Trade Center ',
    state: 'New York',
    fact: 'In addition to the many green features of the One World Trade Center tower—it was built from recycled construction debris and materials, and generates power internally—the entire site was specially constructed to collect rainwater to help care for the plaza’s greenery, cool the building, and replenish the memorial fountain.',
    img: '109859170-ae51d000-7c2a-11eb-83fc-9bedf019afbc.jpg',
    imgAlt: 'Freedom Tower Image',
    indoor: 'indoor',
    description: 'One World Trade Center (also known as One World Trade, One WTC, or Freedom Tower)is the main building of the rebuilt World Trade Center complex in Lower Manhattan, New York City. One WTC is the tallest building in the United States, the tallest building in the Western Hemisphere, and the sixth-tallest in the world. ',
    img2: '109859171-aeea6680-7c2a-11eb-81f1-eafb9efa0972.jpg',
    imgAlt2: 'Freedom Tower at night'
  },{
    name: 'Rock and Roll Hall of Fame',
    state: 'Ohio',
    fact: 'Here, you’ll delve into the wild lives of the greatest guitar heroes of all time.',
    img: '109859173-aeea6680-7c2a-11eb-93c5-4565116071b1.jpg',
    imgAlt: 'Outside the hall of fame at night',
    indoor: 'indoor',
    description: 'The museum documents the history of rock music and the artists, producers, engineers, and other notable figures who have influenced its development.',
    img2: '109859175-aeea6680-7c2a-11eb-9296-ca76276edbf3.jpg',
    imgAlt2: 'inside the hall of fame',
    img3: '109859176-af82fd00-7c2a-11eb-96b9-ad5e0c152a4f.jpg',
    imgAlt3: 'inside the hall of fame',
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