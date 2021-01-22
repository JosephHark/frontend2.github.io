const old = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(old);

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

const sorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.log(sorted);

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
},0);
console.log(totalYears);

const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});
console.log(oldest);