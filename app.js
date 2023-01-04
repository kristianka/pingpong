const p1 = {
    score: 0,
    button: document.querySelector('#addP1'),
    display: document.querySelector('#scoreP1')
};

const p2 = {
    score: 0,
    button: document.querySelector('#addP2'),
    display: document.querySelector('#scoreP2')
};

// check if p1 or p2 score is higher than winningScore
const gameStatus = (p1Score, p2Score, winningScore) => (p1Score === winningScore || p2Score === winningScore) ? true : false;

// update score spans to display current p1 and p2 scores
updateDisplay = () => {
    p1.display.innerHTML = p1.score;
    p2.display.innerHTML = p2.score;
}

function updateScores(player, winningScore) {
    let isGameOver = gameStatus(p1.score, p2.score, winningScore);
    if (!isGameOver) {
        player.score += 1;
        document.querySelector('#rounds').disabled = true;
        updateDisplay();
        resultChecker(winningScore);
    }
}

// check results are there enough points for a vicrory,
// then add classes for css styling
resultChecker = (winningScore) => {
    let winner = '';
    if (p1.score >= winningScore || p2.score >= winningScore) {

        if (p1.score > p2.score) {
            winner = 'P1';
            p1.display.classList.add('winner')
            p2.display.classList.add('loser')
            console.log('tw')
        }
        else {
            winner = 'P2';
            p1.display.classList.add('loser')
            p2.display.classList.add('winner')
        }
        document.querySelector('#result').innerHTML = `Congratulations ${winner}!`
    }
}


function main() {

    let winningScore = 0;
    let selectWinningScore = document.querySelector('#rounds');
    const resetButton = document.querySelector('#reset');

    // initialize by showing zeros
    updateDisplay();

    // select value from menu and parse it to int
    selectWinningScore.addEventListener('change', function () {
        winningScore = parseInt(this.value);
    });

    // listen for clicks and check if points are under winningScore,
    // then disable menu, add and display points, then check if enough for a win
    p1.button.addEventListener('click', () => {
        updateScores(p1, winningScore);
    });

    // same as above but for p2
    p2.button.addEventListener('click', () => {
        updateScores(p2, winningScore);
    });

    // reset everything and change values to 0
    reset = () => {
        p1.score = 0;
        p2.score = 0;
        updateDisplay();
        document.querySelector('#result').innerHTML = '';
        document.querySelector("#rounds").disabled = false;
        document.getElementById("scoreP1").className = '';
        document.getElementById("scoreP2").className = '';
    }

    resetButton.addEventListener('click', () => {
        reset();
    });
}

main();