// Assignment-1

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// Log the results to the console
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("India", 1400, "New Delhi"));
console.log(describeCountry("Japan", 125, "Tokyo"));

//Assignment-2
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld1(6).toFixed(2));
console.log(percentageOfWorld1(1400).toFixed(2));
console.log(percentageOfWorld1(125).toFixed(2));

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}


console.log(percentageOfWorld2(6).toFixed(2));
console.log(percentageOfWorld2(1400).toFixed(2));
console.log(percentageOfWorld2(125).toFixed(2));

//Assignment-3
const percentageOfWorld3 = (population) => population / 7900 * 100;


console.log(percentageOfWorld3(6).toFixed(2));
console.log(percentageOfWorld3(1400).toFixed(2));
console.log(percentageOfWorld3(125).toFixed(2));

//Assignment-4
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(2)}% of the world.`
}

console.log(describePopulation("Finland", 6));
console.log(describePopulation("India", 1400));
console.log(describePopulation("Japan", 125));

//Assignment-5

const population = [6, 1400, 125, 94]

console.log(population.length === 4)

const percentages = population.map(percentageOfWorld1)
console.log(percentages);

//Assignment-6
const neighbors = ["Sri Lanka", "Bangladesh", "Nepal"]
console.log(neighbors);
neighbors.push("Bhutan");
console.log(neighbors);
neighbors.pop();
console.log(!neighbors.includes("Germany") ? "Probably not a central European country :D" : "");
neighbors[neighbors.indexOf("Sri Lanka")] = "Sri-Lanka";
console.log(neighbors);

//Assignment-7

const myCountry = {
    country: "India",
    capital: "New Delhi",
    language: "Hindi",
    population: 1464,
    neighbors: ["Sri Lanka", "Bangladesh", "Nepal"]
}

//Assignment-8

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`)
myCountry.population += 2
console.log(myCountry.population);
myCountry['population'] -= 2
console.log(myCountry['population']);

//Assignment-9

myCountry.describe = function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.country} neighboring countries and a capital called ${this.capital}`
}

console.log(myCountry.describe())

myCountry.checkIsland = function () {
    this.isIsland = (!(myCountry.neighbors.length)) ? true : false
    return this.isIsland
}
console.log(myCountry.checkIsland())

//Assignment-10
for (i = 1; i <= 50; i++) {
    console.log('Voter number ' + i + ' is currently voting');
}
//Assignment-11
percentages2 = []
for (i = 0; i < population.length; i++) {
    percentages2.push(percentageOfWorld1(population[i]))
}
console.log(percentages2);
flag = true;
for (i = 0; i < percentages2.length; i++) {
    if (percentages2[i] !== percentages[i]) {
        flag = false
        break
    }
}

console.log(`both array are ${flag ? "" : "not "}similar`);


//Assignment-11
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors.length; j++) {
        console.log("Neighbors: " + listOfNeighbors[i][j]);
    }
}

//Assignment-12
percentages3 = []
i = 0
while (i < population.length) {
    percentages3.push(percentageOfWorld1(population[i]))
    i++;
}
console.log(percentages3);
flag = true;
while (i < population.length) {
    if (percentages2[i] !== percentages[i]) {
        flag = false
        break
    }
    i++;
}

console.log(`both array are ${flag ? "" : "not "}similar`);
