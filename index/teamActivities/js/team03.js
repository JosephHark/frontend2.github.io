const old = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(old);

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

const sorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.log(sorted);

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

const age = inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? -1 : 1)
console.log(age);

console.log(people);

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);