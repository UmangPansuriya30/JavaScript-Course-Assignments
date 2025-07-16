const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]

dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight **0.75 *28))

const dogSarah = dogs.find(dog=> dog.owners.includes('Sarah'))

console.log(`Sarah's Dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? "much": "little"}`);

const ownersEatTooMuch = dogs.flatMap(dog => dog.curFood > dog.recommendedFood ? dog.owners:[])
const ownersEatTooLittle = dogs.flatMap(dog => dog.curFood < dog.recommendedFood ? dog.owners:[])

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)


console.log(dogs.some(dog=>dog.recommendedFood === dog.curFood));
console.log(dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood *
    1.10) ));

const OkayFoodDogs= dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10))
console.log(OkayFoodDogs);

const sortedDog = dogs.slice().sort((d1,d2)=>d1.recommendedFood-d2.recommendedFood)

console.log(sortedDog)
