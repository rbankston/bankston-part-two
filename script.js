/*
Step 1 Get name

Step 2 Ask how many holes to play
Step 3 Ask for strokes of the holes from step 2
step 4 congratulate and figure out par


*/

let userName = prompt("What is your name?");
let holeCount = prompt(`Hi ${userName}! Would you like to play 3 or 6 holes today?`);
let score = 0;

for (let i = 0; i < parseInt(holeCount); i++){
    let holeScore = prompt(`How many putts for hole ${i+1}. (Par is 3)`);
    
    score = score + parseInt(holeScore)
}

let calculatedPar = parseInt(score) - (parseInt(holeCount)*3)

if (calculatedPar > 1){
    console.log(`Good Game, ${userName}! Your total par was : +${calculatedPar}`)
} else {
    console.log(`Good Game, ${userName}! Your total par was : ${calculatedPar}`)
}