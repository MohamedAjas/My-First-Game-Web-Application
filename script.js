// script.js

const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', () => makeMove(cell.dataset.index));
});

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateCell(index);
        checkWin();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function updateCell(index) {
    cells[index].textContent = gameBoard[index];
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            displayWinner(gameBoard[a]);
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayDraw();
        gameActive = false;
    }
}

function displayWinner(winner) {
    alert(`${winner} wins!`);
    resetGame();
}

function displayDraw() {
    alert('It\'s a draw!');
    resetGame();
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}
// script.js

// ... existing code

function displayWinner(winner) {
    showResultScreen(`${winner} wins!`);
}

function displayDraw() {
    showResultScreen('It\'s a draw!');
}

function showResultScreen(message) {
    const resultScreen = document.getElementById('result-screen');
    const resultContent = document.getElementById('result-content');
    const resultMessage = document.createElement('p');
    const newGameButton = document.createElement('button');
    const restartButton = document.createElement('button');

    resultMessage.textContent = message;
    resultContent.innerHTML = '';
    resultContent.appendChild(resultMessage);

    newGameButton.textContent = 'New Game';
    newGameButton.id = 'new-game-button';
    newGameButton.addEventListener('click', resetGame);

    restartButton.textContent = 'Restart';
    restartButton.id = 'restart-button';
    restartButton.addEventListener('click', restartGame);

    resultContent.appendChild(newGameButton);
    resultContent.appendChild(restartButton);
    resultScreen.style.display = 'flex';
}

function resetGame() {
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'none';

    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

function restartGame() {
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'none';

    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}
