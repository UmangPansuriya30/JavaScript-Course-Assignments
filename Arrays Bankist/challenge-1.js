
function checkDogs(dogsJulia, dogsKate) {
    dogsJulia2 = dogsJulia.slice(1, 3)
    console.log(dogsJulia2)
    dogData = dogsJulia2.concat(dogsKate)
    console.log(dogData)
    dogData.forEach((dog, i) => {
        if (dog > 3)
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
        else
            console.log(`Dog number ${i+1} is  is still a puppy`)
    });

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
