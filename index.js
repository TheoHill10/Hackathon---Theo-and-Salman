//Tic tac toe
//
// Plan of action:
//1. Get grid printed on command line
//2. Input a cross or circle anywhere on the grid
//3. Computer can input a circle or cross anywhere

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame(){
    introduction()
    let positions = ["Top_L", "Top_M", "Top_R", "Mid_L", "Mid_M", "Mid_R", "Bot_L", "Bot_M", "Bot_R"]
    playerChoice(positions)
}

function introduction(){
    console.log('Welcome to Tic Tac Toe');
    console.log('You will play as naughts and the computer will play as crosses');
    console.log('To play: Enter a grid postion in the following box (e.g Top_L, Mid_M and Bot_R)');
    console.log('Good luck');
    console.log(displayEmptyGrid());
}

function playerChoice(positions){
    rl.question(`Where do you want to place? `, input => {
    for(i=0;i<positions.length;i++){
        if (input == positions[i]){
            positions[i] = "X"
        }
    }
    displayUpdatedGrid(positions)
    computerChoice(positions)
    });
    return positions 
}
function computerChoice(positions){
    let random = Math.floor(Math.random()*positions.length)
    while(positions[random] === "X" || positions[random] === "O"){
        random = Math.floor(Math.random()*positions.length)
    }
    positions[random] = "O"
    displayUpdatedGrid(positions)
    playerChoice(positions)
    return positions
}

const winning_combinations = [[Top_L, Top_M, Top_R], [Mid_L, Mid_M, Mid_R]]


function displayUpdatedGrid(arr){
    console.log('            |         |           ');
    console.log('            |         |           ');
    console.log(`     ${arr[0]}      |     ${arr[1]}   |     ${arr[2]}      `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${arr[3]}     |    ${arr[4]}    |     ${arr[5]}     `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${arr[6]}     |     ${arr[7]}   |     ${arr[8]}      `);
    console.log('            |         |           ');
    console.log('            |         |           ');
}

// Display grid
function displayEmptyGrid(){
    Top_L = ''
    Top_M = ''
    Top_R = ''
    Mid_L = ''
    Mid_M = ''
    Mid_R = ''
    Bot_L = ''
    Bot_M = ''
    Bot_R = ''

    console.log('            |         |           ');
    console.log('            |         |           ');
    console.log(`     ${Top_L}       |     ${Top_M}    |     ${Top_R}      `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${Mid_L}      |    ${Mid_M}     |     ${Mid_R}     `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${Bot_L}      |     ${Bot_M}    |     ${Bot_R}      `);
    console.log('            |         |           ');
    console.log('            |         |           ');
}

console.log(playGame());