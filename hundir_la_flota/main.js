function getRandomNumber() {
    return Math.floor(Math.random() * 8);
}

function addBoat(board) {

    let added = false;

    while (!added) {
        const x = getRandomNumber();
        const y = getRandomNumber();
        if (x + 1 < board.length && board[x][y] === '~' && board[x + 1][y] === '~') {
            board[x][y] = 'O';
            board[x + 1][y] = 'O';
            added = true;
        }
    }
}


function initBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
        board.push([]);
        for (let j = 0; j < 8; j++) {
            board[i].push('~');
        }
    }

    for (let i = 0; i < 4; i++) {
        addBoat(board);
    }
    console.log(board);
    return board;
}

function getNumber() {
    let valid = false;
    while (!valid) {
        const res = window.prompt('Dame un número:');
        if (!isNaN(res) && parseInt(res, 10) >= 0 && parseInt(res) < 8) {
            return parseInt(res);
        }
    }
}

function play(board) {
    let numTurn = 0;
    let numSet = 0;

    while (numTurn < 25 && numSet < 8) {
        let x = getNumber();
        let y = getNumber();


        if (board[x][y] === 'O') {
            window.alert('Hit');
            board[x][y] = 'X';
            numSet++;
        } else {
            window.alert('Missed');
        }
        numTurn++;
    }

    if (numSet === 8) {
        window.alert('Has ganado');
    } else {
        window.alert('Has perdido');
    }
}

const board = initBoard();
play(board);