// Example of using Classes and modules to organize the code needed to render our list of locations. Not using MVC here.

//create an array of locations
const locationList = [{
  name: 'US Space and Rocket Center',
  state: 'Alabama',
  fact: 'This is the biggest space museum in the country.',
  img: 'https://user-images.githubusercontent.com/71291466/109859232-b7db3800-7c2a-11eb-8d19-a28bab037e9b.jpg',
  imgAlt: 'US Space and Rocket Center',
  indoor: 'indoor',
  description: 'The U.S. Space & Rocket Center in Huntsville, Alabama is a museum showcasing rockets, achievements, and artifacts of the U.S. space program. The center opened in 1970, just after the Apollo 12 Moon landing, the second crewed mission to the lunar surface. It showcases Apollo Program hardware and also houses interactive science exhibits, Space Shuttle exhibits, and Army rocketry and aircraft.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859230-b742a180-7c2a-11eb-8df6-792914b78d87.jpg',
  imgAlt2: 'US Space and Rocket Center',
  
},{
  name: 'Grand Canyon National Park',
  state: 'Arizona',
  fact: 'More than 400 miles of historic back-county trails lead into the canyon.',
  img: 'https://user-images.githubusercontent.com/71291466/109859177-af82fd00-7c2a-11eb-9d8d-eb2c189dc3f0.jpg',
  imgAlt: 'Grand Canyon Image',
  indoor: 'outside',
  description: "Grand Canyon National Park, located in northwestern Arizona, is the 15th site in the United States to have been named as a national park. The park's central feature is the Grand Canyon, a gorge of the Colorado River, which is often considered one of the Wonders of the World.",
  img2: 'https://user-images.githubusercontent.com/71291466/109859179-af82fd00-7c2a-11eb-98bf-0dd6ad92d8c7.jpg',
  imgAlt2: 'Grand Canyon',
  img3: 'https://user-images.githubusercontent.com/71291466/109859181-af82fd00-7c2a-11eb-93d0-65c7d8a4f36a.jpg',
  imgAlt3: 'Grand Canyon'
},
{
  name: 'Painted Desert',
  state: 'Arizona',
  fact: 'A broad region of rocky badlands encompassing more than 93,500 acres, this vast landscape features rocks in every hue – from deep lavenders and rich grays to reds, oranges, and pinks.',
  img: 'https://user-images.githubusercontent.com/71291466/109859184-b01b9380-7c2a-11eb-865b-df2171bcb6c5.jpg',
  imgAlt: 'Painted Desert',
  indoor: 'outside',
  description: "Instead, the area is evidence of Earth’s volatility. Home to some of the nation’s most memorable formations and features, volcanic eruptions, earthquakes, floods, and sunlight, all combined to create the Painted Desert. Deposits of clay and sandstone, stacked in elegant layers, reflects the setting Arizona sun in an altering display of colorful radiance.",
  img2: 'https://user-images.githubusercontent.com/71291466/109859185-b01b9380-7c2a-11eb-9af0-b8e4b617cb15.jpg',
  imgAlt2: 'Painted Desert',
  img3: 'https://user-images.githubusercontent.com/71291466/109859199-b27ded80-7c2a-11eb-92db-4114e6167962.jpg',
  imgAlt3: 'Painted Desert'
},{
  name: 'Petreified Forest',
  state: 'Arizona',
  fact: 'The Human Story at Petrified Forest is over 13,000 years long.',
  img: 'https://user-images.githubusercontent.com/71291466/109859204-b3168400-7c2a-11eb-976f-5038fa7b6e77.jpg',
  imgAlt: 'Petreified Forest',
  indoor: 'outside',
  description: 'More than 13,000 years of human history and culture are represented at Petrified Forest National Park. From prehistoric peoples to the Civilian Conservation Corps, from early explorers to Route 66 motorists, the park has many stories to tell.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859206-b3af1a80-7c2a-11eb-9e32-c6576d281b41.jpg',
  imgAlt2: 'Petreified Forest',
},{
  name: 'Everglades National Park ',
  state: 'Florida',
  fact: 'The Everglades National Park, with its lush forests and wetlands making up the largest tropical wilderness in the country.',
  img: 'https://user-images.githubusercontent.com/71291466/109859168-adb93980-7c2a-11eb-89d1-f988ddb7ddd5.jpg',
  imgAlt: 'Image of sunset in the Florida Everygreens',
  indoor: 'outside',
  description: 'The park is the largest tropical wilderness in the United States, and the largest wilderness of any kind east of the Mississippi River. Everglades is the third-largest national park in the contiguous United States after Death Valley and Yellowstone.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859169-ae51d000-7c2a-11eb-9b30-183e8d6eff72.jpg',
  imgAlt2: 'Boardwalk in Florida Evergreens',
  img3: 'https://user-images.githubusercontent.com/71291466/109859201-b3168400-7c2a-11eb-9c24-52014f3be52e.jpg',
  imgAlt3: 'evergreen florida'
},{
  name: 'Georgia Aquarium',
  state: 'Georgia',
  fact: "There's more than 10 million gallons of water.",
  img: 'https://user-images.githubusercontent.com/71291466/109859172-aeea6680-7c2a-11eb-8e95-b07f2e6783a3.jpg',
  imgAlt: 'Image of the Georgia Aquarium',
  indoor: 'inside',
  description: 'Georgia Aquarium is home to hundreds of species and thousands of animals across its seven major galleries, all of which reside in more than 10 million US gallons (38,000 m3) of fresh and saltwater. It was the largest aquarium in the world from its opening in 2005 until 2012 when it became the third-largest aquarium in the world after the Marine Life Park in Singapore and the Chimelong Ocean Kingdom in China; the Georgia Aquarium remains the largest aquarium in the United States and in the Western Hemisphere.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859202-b3168400-7c2a-11eb-8221-5a23c3479004.jpg',
  imgAlt2: 'Georgia Aquarium',
  img3: '',
  imgAlt3: 'Georgia Aquarium'
},{
  name: 'Monument Rocks',
  state: 'Kansas',
  fact: 'These rocks are more than 80 million years old.',
  img: 'https://user-images.githubusercontent.com/71291466/109859233-b7db3800-7c2a-11eb-8b87-9696012dd09c.jpg',
  imgAlt: 'Monument Rocks',
  indoor: 'outside',
  description: 'Monument Rocks (also Chalk Pyramids) are a series of large chalk formations in Gove County, Kansas, rich in fossils. The carbonate deposits were laid down during the Cretaceous Period in what was then the Western Interior Seaway, which split the continent of North America into two landmasses. They are estimated to have been formed 80 million years ago.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859195-b1e55700-7c2a-11eb-9657-0848ef444c63.jpg',
  imgAlt2: 'monument rocks',
  img3: 'https://user-images.githubusercontent.com/71291466/109859234-b7db3800-7c2a-11eb-9962-f77b8d9e28ae.jpg',
  imgAlt3: 'Monument Rocks'
},{
  name: 'Pictured Rocks National Lakeshore',
  state: 'Michigan',
  fact: 'Expect to see ornate sandstone cliffs and rock formations, cascading waterfalls, and tranquil beaches.',
  img: 'https://user-images.githubusercontent.com/71291466/109859197-b27ded80-7c2a-11eb-9c91-c8b1fbe3fb6d.jpg',
  imgAlt: 'Pictured Rocks',
  indoor: 'outside',
  description: 'Pictured Rocks derives its name from the 15 miles (24 km) of colorful sandstone cliffs northeast of Munising. The cliffs reach up to 200 feet (60 m) above lake level. They have been naturally sculptured into a variety of shallow caves, arches, and formations resembling castle turrets and human profiles.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859214-b447b100-7c2a-11eb-8895-33ab230da0ea.jpg',
  imgAlt2: 'Pictured Rocks',
},{
  name: 'Yellowstone National Park',
  state: 'Montana',
  fact: "Old Faithful, the world's most famous geyser is esemtaied to erput as many as 20 times a day.",
  img: 'https://user-images.githubusercontent.com/71291466/109859221-b6117480-7c2a-11eb-89c3-642ddd1dfa87.jpg',
  imgAlt: 'Old Faithful',
  indoor: 'outside',
  description: 'Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859219-b578de00-7c2a-11eb-8871-0b44bc0cf975.jpg',
  imgAlt2: 'waterfall at yellowstone'
},{
  name: 'Empire State Building',
  state: 'New York',
  fact: 'Head to the heavens by visiting Mount Washington State Park, which covers the peak of Mount Washington, which is part of the Presidential Range.',
  img: 'https://user-images.githubusercontent.com/71291466/109859191-b0b42a00-7c2a-11eb-9e82-f099b54d27d2.jpg',
  imgAlt: 'empire state builing',
  indoor: 'indoor and outdoor',
  description:"Its name is derived from Empire State, the nickname of the state of New York. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. The Empire State Building stood as the world's tallest building until the construction of the World Trade Center in 1970." ,
  img2: 'https://user-images.githubusercontent.com/71291466/109859200-b27ded80-7c2a-11eb-8754-8478b65a8924.jpg',
  imgAlt2: 'sunset on empire state building',
},{
  name: 'One World Trade Center ',
  state: 'New York',
  fact: 'In addition to the many green features of the One World Trade Center tower—it was built from recycled construction debris and materials, and generates power internally—the entire site was specially constructed to collect rainwater to help care for the plaza’s greenery, cool the building, and replenish the memorial fountain.',
  img: 'https://user-images.githubusercontent.com/71291466/109859170-ae51d000-7c2a-11eb-83fc-9bedf019afbc.jpg',
  imgAlt: 'Freedom Tower Image',
  indoor: 'indoor',
  description: 'One World Trade Center (also known as One World Trade, One WTC, or Freedom Tower)is the main building of the rebuilt World Trade Center complex in Lower Manhattan, New York City. One WTC is the tallest building in the United States, the tallest building in the Western Hemisphere, and the sixth-tallest in the world. ',
  img2: 'https://user-images.githubusercontent.com/71291466/109859171-aeea6680-7c2a-11eb-81f1-eafb9efa0972.jpg',
  imgAlt2: 'Freedom Tower at night'
},{
  name: 'Rock and Roll Hall of Fame',
  state: 'Ohio',
  fact: 'Here, you’ll delve into the wild lives of the greatest guitar heroes of all time.',
  img: 'https://user-images.githubusercontent.com/71291466/109859173-aeea6680-7c2a-11eb-93c5-4565116071b1.jpg',
  imgAlt: 'Outside the hall of fame at night',
  indoor: 'indoor',
  description: 'The museum documents the history of rock music and the artists, producers, engineers, and other notable figures who have influenced its development.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859175-aeea6680-7c2a-11eb-9296-ca76276edbf3.jpg',
  imgAlt2: 'inside the hall of fame',
  img3: 'https://user-images.githubusercontent.com/71291466/109859176-af82fd00-7c2a-11eb-96b9-ad5e0c152a4f.jpg',
  imgAlt3: 'inside the hall of fame',
},{
  name: 'Charleston ',
  state: 'South Carolina',
  fact: 'Whether you’re interested in the Civil War or just want to wander the handsome streets, explore Charleston Waterfront, and take in the Southern charm, it ticks boxes for history lovers and romantic couples alike.',
  img: 'https://user-images.githubusercontent.com/71291466/109859198-b27ded80-7c2a-11eb-8bdb-f97e897f671c.jpg',
  imgAlt: 'Charleston',
  indoor: 'inside and outside',
  description: "Charleston played a major part in the Civil War. As a pivotal city, both the Union and Confederate Armies vied for power. The war ended mere months after the Union forces took control of Charleston. Not only did the Civil War end not long after Charleston's surrender, but the Civil War began there.",
  img2: 'https://user-images.githubusercontent.com/71291466/109859183-af82fd00-7c2a-11eb-8a48-9e1d04004508.jpg',
  imgAlt2: 'Charleston',
  img3: '',
  imgAlt3: 'Charleston'
},{
  name: "Devil’s Tower",
  state: 'Wyoming',
  fact: 'Made famous around the world by its starring role in the classic sci-fi movie Close Encounters of the Third Kind.',
  img3: 'https://user-images.githubusercontent.com/71291466/109859188-b01b9380-7c2a-11eb-929e-c983bc8f7a43.jpg',
  imgAlt: 'devils tower at night',
  indoor: 'outside',
  description: 'It rises 1,267 feet (386 m) above the Belle Fourche River, standing 867 feet (265 m) from summit to base. The summit is 5,112 feet (1,559 m) above sea level. Devils Tower was the first United States national monument, established on September 24, 1906, by President Theodore Roosevelt.',
  img2: 'https://user-images.githubusercontent.com/71291466/109859186-b01b9380-7c2a-11eb-9ff4-65e796d6bf7a.jpg',
  imgAlt2: 'devils tower',
  img: 'https://user-images.githubusercontent.com/71291466/109859189-b0b42a00-7c2a-11eb-8cda-8dec2655e2f6.jpg',
  imgAlt3: 'devils tower at night'
}
];

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