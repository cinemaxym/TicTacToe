/*The following program determines the winner of all the 2D arrays that are defined bellow */

// Define arrays        
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you

/* The following function determines whether a winning play has been made or not. 
The function logs the results to the console - that X has won and O has lost, or vice versa.*/
function evaluatePlay(grid){

    // ------------------------------- Have -------------------------------------------

    // ------------------------------- Fun  -------------------------------------------

    let checkArray = [];                                 //converts 2-D array to 1-D array 
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            checkArray.push(grid[i][j])
        }
    }
    if (checkArray[0] == "O" && checkArray[1] == "O" && checkArray[2] == "O") {        // "O" row win statement 
        console.log("\nO Won \nX Lost") 
    }
    else if (checkArray[1] == "X" && checkArray[4] == "X" && checkArray[7] == "X") {   // "X" column win statement
        console.log("\nX Won \nO Lost")
    }
    else if (checkArray[2] == "O" && checkArray[4] == "O" && checkArray[6] == "O") {    // "O" diogonal win statement
        console.log("\nO Won \nX Lost")
    }
    else if (checkArray[0] == "X" && checkArray[4] == "X" && checkArray[8] == "X") {    // "X" diogonal inverse win statement
        console.log("\nX Won \nO Lost")
    }
}

evaluatePlay(rowWin) //calls function evaluatePlay for rowWin

evaluatePlay(colWin) //calls function evaluatePlay for colWin

evaluatePlay(diagonalWin) //calls function evaluatePlay for diagonalWin

evaluatePlay(diagonalWinInverse) //calls function evaluatePlay for diagonalWinInverse 