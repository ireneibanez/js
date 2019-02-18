
const board = [
    ['',  '', ''],
    ['',  '', ''],
    ['',  '', '']
]

let turn = 'X';
let won = false;

function doTurn() {
    if (won) {
        return;
    }

    const pos = this.id.split('-').map(Number);
    
    if(board[pos[0]][pos[1]]){
        return;
    }

    board[pos[0]][pos[1]] = turn;
   
    if(win()){
        won = true;
        alert('Has ganado');
    } else if (looser(board)) {
        alert('Has perdido');
    }

    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X'  
    }

    paintBoard(); 

}

function paintBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            $(`#${i}-${j}`).text(board[i][j]);
        }
    }
}

function init() {
    $('td').on('click', doTurn);
}

$(document).ready(function() {
    init();
})


function looker(array, value) {
    let counter = 0;
    for(let i=0; i<array.length; i++) {
        if (array[i] === value) {
            counter++;
        }
    }
    if(counter === array.length) {
        return true;
    } 
    return false;
}


function win(){
    for(let i=0; i<board.length; i++){
        if (looker(board[i], turn) === true){
            return true;
        }
    }
    for(let i=0; i<board.length; i++) {
        if((board[0][i] === turn) && (board[1][i] === turn) && (board[2][i] === turn)){
            return true;
        }
    }
    if ((board[0][0] === turn) && (board[1][1] === turn) && (board[2][2] === turn) || ((board[2][0] === turn) && (board[1][1] === turn) && (board[0][2] === turn))) {
        return true;
    }
}


function looser(board) {
    let counter = 0;
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if (board[i][j] !== '') {
                counter++;
            }
        }  
    }
    if(counter === 9) {
        return true;
    } 
    return false;
}

