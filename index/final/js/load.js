import Locations from './locations.js';
//on load grab the array and insert it into the page
const myLocations = new Locations('locations');
window.addEventListener('load', () => {
  myLocations.showLocationList();
}); 
