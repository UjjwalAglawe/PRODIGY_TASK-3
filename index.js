let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(event) {
    const cellIndex = event.target.dataset.index;

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('message').textContent = "It's a tie!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern =>
        gameBoard[pattern[0]] !== '' &&
        gameBoard[pattern[0]] === gameBoard[pattern[1]] &&
        gameBoard[pattern[1]] === gameBoard[pattern[2]]
    );
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('message').textContent = "Player X's turn";
    document.getElementById('board').innerHTML = '';
    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        document.getElementById('board').appendChild(cell);
    }
}
