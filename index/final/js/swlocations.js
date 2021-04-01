// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
    name: 'US Space and Rocket Center',
    state: 'Alabama',
    fact: 'This is the biggest space museum in the country.',
    img: '109859232-b7db3800-7c2a-11eb-8d19-a28bab037e9b.jpg',
    imgAlt: 'US Space and Rocket Center',
    indoor: 'indoor',
    description: 'The U.S. Space & Rocket Center in Huntsville, Alabama is a museum showcasing rockets, achievements, and artifacts of the U.S. space program. The center opened in 1970, just after the Apollo 12 Moon landing, the second crewed mission to the lunar surface. It showcases Apollo Program hardware and also houses interactive science exhibits, Space Shuttle exhibits, and Army rocketry and aircraft.',
    img2: '109859230-b742a180-7c2a-11eb-8df6-792914b78d87.jpg',
    imgAlt2: 'US Space and Rocket Center',
    
  },{
    name: 'Grand Canyon National Park',
    state: 'Arizona',
    fact: 'More than 400 miles of historic back-county trails lead into the canyon.',
    img: '109859177-af82fd00-7c2a-11eb-9d8d-eb2c189dc3f0.jpg',
    imgAlt: 'Grand Canyon Image',
    indoor: 'outside',
    description: "Grand Canyon National Park, located in northwestern Arizona, is the 15th site in the United States to have been named as a national park. The park's central feature is the Grand Canyon, a gorge of the Colorado River, which is often considered one of the Wonders of the World.",
    img2: '109859179-af82fd00-7c2a-11eb-98bf-0dd6ad92d8c7.jpg',
    imgAlt2: 'Grand Canyon',
    img3: '109859181-af82fd00-7c2a-11eb-93d0-65c7d8a4f36a.jpg',
    imgAlt3: 'Grand Canyon'
  },
  {
    name: 'Painted Desert',
    state: 'Arizona',
    fact: 'A broad region of rocky badlands encompassing more than 93,500 acres, this vast landscape features rocks in every hue – from deep lavenders and rich grays to reds, oranges, and pinks.',
    img: '109859184-b01b9380-7c2a-11eb-865b-df2171bcb6c5.jpg',
    imgAlt: 'Painted Desert',
    indoor: 'outside',
    description: "Instead, the area is evidence of Earth’s volatility. Home to some of the nation’s most memorable formations and features, volcanic eruptions, earthquakes, floods, and sunlight, all combined to create the Painted Desert. Deposits of clay and sandstone, stacked in elegant layers, reflects the setting Arizona sun in an altering display of colorful radiance.",
    img2: '109859185-b01b9380-7c2a-11eb-9af0-b8e4b617cb15.jpg',
    imgAlt2: 'Painted Desert',
    img3: '109859199-b27ded80-7c2a-11eb-92db-4114e6167962.jpg',
    imgAlt3: 'Painted Desert'
  },{
    name: 'Petreified Forest',
    state: 'Arizona',
    fact: 'The Human Story at Petrified Forest is over 13,000 years long.',
    img: '109859204-b3168400-7c2a-11eb-976f-5038fa7b6e77.jpg',
    imgAlt: 'Petreified Forest',
    indoor: 'outside',
    description: 'More than 13,000 years of human history and culture are represented at Petrified Forest National Park. From prehistoric peoples to the Civilian Conservation Corps, from early explorers to Route 66 motorists, the park has many stories to tell.',
    img2: '109859206-b3af1a80-7c2a-11eb-9e32-c6576d281b41.jpg',
    imgAlt2: 'Petreified Forest',
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