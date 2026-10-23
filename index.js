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
    let grid = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    playerChoice(positions, grid)
    
}

function introduction(){
    console.log('Welcome to Tic Tac Toe');
    console.log('You will play as naughts and the computer will play as crosses');
    console.log('To play: Enter a grid postion in the following box (e.g Top_L, Mid_M and Bot_R)');
    console.log('Good luck');
    console.log(displayEmptyGrid());
}

function playerChoice(positions, grid){
    rl.question(`Where do you want to place? `, input => {
    for(i=0;i<positions.length;i++){
        if (input == positions[i]){
            grid[i] = "X"
        }
    }
    displayUpdatedGrid(grid)
    checkWinner(grid)
    computerChoice(positions, grid)
    });
    return positions 
}
function computerChoice(positions, grid){
    let random = Math.floor(Math.random()*positions.length)
    while(grid[random] === "X" || grid[random] === "O"){
        random = Math.floor(Math.random()*positions.length)
    }
    grid[random] = "O"
    console.log("Computer's turn now")
    displayUpdatedGrid(grid)
    checkWinner(grid)
    playerChoice(positions, grid)
    return positions
}

function checkWinner(grid){
    const winning_combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let naughts_combination = []
    let cross_combination = []

    for (i=0;i<grid.length;i++){
        if (grid[i] === "X"){
            cross_combination.push(i)
        }
        else if (grid[i] ==="O"){
            naughts_combination.push(i)
        }
    }

// const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
    let cross_win = false
    let naughts_win = false
    if (cross_win == false && naughts_win == false){
        for (win_combination of winning_combinations){ // [a,b,c]
            cross_win = win_combination.every((element) => cross_combination.includes(element))
            naughts_win = win_combination.every((element) => naughts_combination.includes(element))
             if (cross_win ==true){
                console.log("Player has won!!")
                //rl.close()
            }
            else if (naughts_win ==true){
                console.log("Computer won!!")
                //rl.close()
            }
    }}

    console.log(cross_combination)
    console.log(naughts_combination)
    return 

}

function displayUpdatedGrid(grid){
    console.log('            |         |           ');
    console.log('            |         |           ');
    console.log(`     ${grid[0]}      |     ${grid[1]}   |     ${grid[2]}      `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${grid[3]}     |    ${grid[4]}    |     ${grid[5]}     `);
    console.log('            |         |           ');
    console.log('------------|---------|-----------');
    console.log('            |         |           ');
    console.log(`      ${grid[6]}     |     ${grid[7]}   |     ${grid[8]}      `);
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