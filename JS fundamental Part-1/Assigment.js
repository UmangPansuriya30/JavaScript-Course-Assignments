// Assignment-1
country="India"
continent="Asia"
population = 1464

console.log(country);
console.log(continent);
console.log(population,"million");

// Assignment-2
isIsland=true;
let language="hindi";

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof language)

// Assignment-3
const PI=3.1415;
// PI=23;

// Assignment-4
half_country_pop=population/2;
console.log(++population, "million")

finland_pop=6
console.log(finland_pop<population)
avg_country_pop=33
console.log(avg_country_pop>population)

let description = `india is in Asia and its 1464 million people speak English`


// Assignment-5
description = `${country} is in ${continent} and its ${population} million people speak English`

// Assignment-6
population =13

if (avg_country_pop < population)
    console.log(`${country}'s Population is above average`)
else
    console.log(`${country}'s poulation is ${population} million below average`)

population = 130
if (avg_country_pop < population)
    console.log(`${country}'s Population is above average`)
else
    console.log(`${country}'s poulation is ${population} million below average`)
population=1464

// Assignment-7
// 4
// 617
// 23
// false
// 1143
console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5+6+'4'+9-4-2)


// Assignment-8
// to perform this using prompt we need to combine this js file to html
numNeighbours = Number('1')

if(numNeighbours == 1)
    console.log("Only 1 border!")
else if(numNeighbours>1)
    console.log("More than 1 border")
else
    console.log("No border")

//Assignment-9
if(language==='english' && population<50 && !isIsland)
    console.log(`You should live in ${country} :)`)
else
    console.log(`${country} does not meet your criteria :( `)

//Assignment-10
console.log(language)
switch(language)
{
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log("Great language too :D");
        break;
}

//Assignment -11

population = 13;
(avg_country_pop < population)
    ? console.log(`${country}'s Population is above average`)
    : console.log(`${country}'s poulation is ${population} million below average`);

population = 130;
(avg_country_pop < population)
    ?console.log(`${country}'s Population is above average`)
    :console.log(`${country}'s poulation is ${population} million below average`);
population = 1464;