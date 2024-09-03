function Gameboard() {
    const row=3;
    const column= 3;
    const board=[];

    //2d array that is representing the size of the gameboard
    for (let i = 0; i < row; i++) {
        board[i]=[]
        for (let j = 0; j < column; j++) {
            board[i].push(Cell());
            
        };
        
    }
    const getCell= (row, col) => board[row][col]; 
    
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.table(boardWithCellValues);
      };

    return {
        printBoard,
        getCell
    };
}


function Cell() {
    let value=1;

    const playerChoice= (player)=>{
        value=player;
    };
    const getValue= ()=> value;

    return {
        getValue,
        playerChoice
    };      
}
function players(name, XorO) {
    const player= {
        name:name,
        value:XorO
    }
    return player

}
const player1=players("Vanja",'x');
const player2=players("Denicija",'o');

const gameboard= Gameboard();

do{
let row= prompt("choose row:","only 1");
let column= prompt("choose column:","only 1");
let cell= gameboard.getCell(row,column);
let playerSelection= prompt("X or 0?:");
playerSelection= playerSelection.toLocaleUpperCase();

switch (playerSelection) {
    case "X": cell.playerChoice(player1.value);
        break;    
        

    case "O": cell.playerChoice(player2.value);
        break;

    default:alert("invalid input, try again");
        break;
}
gameboard.printBoard();
}while(setInterval(5))