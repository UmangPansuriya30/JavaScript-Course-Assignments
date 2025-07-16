const calcAverageHumanAge = dogAges=>
    dogAges.map(x=> x<=2 ? x * 2 : 16 + x * 4)
        .filter(x => x >= 18)
        .reduce((a,age,i,arr)=> a + age/arr.length,0) ;

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

