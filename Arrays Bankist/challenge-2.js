const calcAverageHumanAge = function(dogAges){
    let humanAges = dogAges.map(x=>
        x<=2 ? x * 2 : 16 + x * 4
    )
    console.log(humanAges)
    const adults = humanAges.filter(x => x >= 18);
    console.log(adults)
    const average = adults.reduce((a,age)=>a+age) / adults.length;

    return average
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
