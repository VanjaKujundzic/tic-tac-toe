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

    const boardWithValues=()=> board.map((row) => row.map((cell) => cell.getValue()))

    return {
        boardWithValues,
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
function Players(name, XorO) {
    const player= {
        name:name,
        value:XorO.toUpperCase()
    }
    return player

}

function playRound() {

    const player1=Players("Vanja",'x');
    const player2=Players("Denicija",'o');
    let x=0;

    
    do{
        let row= prompt("choose row:","only 1");
        let column= prompt("choose column:","only 1");
        let cell= gameboard.getCell(row,column);
        let playerSelection= prompt("X or 0?:");
        playerSelection= playerSelection.toUpperCase();
        
        switch (playerSelection) {
            case "X": cell.playerChoice(player1.value);
                break;    
                
        
            case "O": cell.playerChoice(player2.value);
                break;
        
            default:alert("invalid input, try again");
                break;
        }
        
        

        //to see if the game is over
        let firstArray = gameboard.boardWithValues()[0];
        let secondArray = gameboard.boardWithValues()[1];
        let thirdArray = gameboard.boardWithValues()[2];
        const checkGameOver=GameOver(firstArray,secondArray,thirdArray);
        
        

        checkGameOver();
        gameboard.printBoard();
        x++;
    }while(x<4)

}
const gameboard= Gameboard();

//for the game checker 
function GameOver(array1,array2,array3){
    

    const gameChecker=()=>{
        
        console.log(array1+array2+array3);

        let gameChecker= array1.every(n=>n === "X");
        let gameChecker2= array2.every(n=>n === "X");
        let gameChecker3= array3.every(n=>n === "X");
        if(gameChecker || gameChecker2 || gameChecker3){
            alert("Game overrrr")
            
        }
        else console.log("no winner yet");

    }
    return gameChecker
}

// const secondArray= array[1];
// const thirdArray= array[2];

playRound();
