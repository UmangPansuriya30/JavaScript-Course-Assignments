const game = {
      team1: 'Bayern Munich',
      team2: 'Borrussia Dortmund',
      players: [
            [
                  'Neuer',
                  'Pavard',
                  'Martinez',
                  'Alaba',
                  'Davies',
                  'Kimmich',
                  'Goretzka',
                  'Coman',
                  'Muller',
                  'Gnarby',
                  'Lewandowski',
            ],
            [
                  'Burki',
                  'Schulz',
                  'Hummels',
                  'Akanji',
                  'Hakimi',
                  'Weigl',
                  'Witsel',
                  'Hazard',
                  'Brandt',
                  'Sancho',
                  'Gotze',
            ],
      ],
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
            'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
            team1: 1.33,
            x: 3.25,
            team2: 6.5,
      },
};

const [players1,players2] = game.players
console.log(players1,players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1,...players2]
console.log(allPlayers);

const players1Final = [...players1, 'Thiago','Coutinho','Perisic']
console.log(players1Final);

const { odds:{team1, x:draw,team2}} = game
console.log(team1,draw,team2);

function printGoals(...players){
      console.log(players);
      console.log(`${players.length} goals were scored`);      
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);

team1<team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");


//Challenge-2
console.log("---------------Challeng-2--------------------");

for (const [index,element] of game.scored.entries()){
      console.log(`Goal ${index}: ${element}`);
}

const odds = Object.values(game.odds);
let avg=0;
for(const odd of odds)
      avg += odd;
avg /= odds.length
console.log(avg)


for (const [key,value] of Object.entries(game.odds)){
      const teamStr = key ==='x' ? 'draw' : `victory ${game[key]}`;
      console.log(`Odd of ${teamStr} ${value}` )
}

const scorers = {};

for (const player of game.scored) {
      scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers)

