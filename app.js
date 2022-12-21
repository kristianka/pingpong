
// check results are there enough points for a vicrory,
// then add classes for css styling
resultChecker = (p1Score, p2Score, winningScore) => {

    if (p1Score >= winningScore || p2Score >= winningScore) {
        const displayp1 = document.getElementById("scoreP1");
        const displayp2 = document.getElementById("scoreP2");
        let winner = '';

        if (p1Score > p2Score) {
            winner = 'P1';
            displayp1.classList.add('winner')
            displayp2.classList.add('loser')
        }
        else {
            winner = 'P2';
            displayp1.classList.add('loser')
            displayp2.classList.add('winner')
        }
        document.querySelector('#result').innerHTML = `Congratulations ${winner}!`
    }
}

// check if p1 or p2 score is higher than winningScore
const gameStatus = (p1Score, p2Score, winningScore) => (p1Score === winningScore || p2Score === winningScore) ? true : false;

// update score spans to display current p1 and p2 scores
updateDisplay = (p1Score, p2Score) => {
    document.querySelector('#scoreP1').innerHTML = p1Score;
    document.querySelector('#scoreP2').innerHTML = p2Score;
}

function main() {

    let p1Score = 0;
    let p2Score = 0;
    let winningScore = 0;
    let selectWinningScore = document.querySelector('#rounds');
    const p1button = document.querySelector('#addP1');
    const p2button = document.querySelector('#addP2');
    const resetButton = document.querySelector('#reset');

    // initialize by showing zeros
    updateDisplay(p1Score, p2Score);

    // select value from menu and parse it to int
    selectWinningScore.addEventListener('change', function () {
        winningScore = parseInt(this.value);
    });

    // listen for clicks and check if points are under winningScore,
    // then disable menu, add and display points, then check if enough for a win
    p1button.addEventListener('click', () => {
        let isGameOver = gameStatus(p1Score, p2Score, winningScore);
        if (isGameOver === false) {
            document.querySelector("#rounds").disabled = true;
            p1Score += 1
            updateDisplay(p1Score, p2Score);
            resultChecker(p1Score, p2Score, winningScore);
        }
    });

    // listen for clicks and check if points are under winningScore,
    // then disable menu, add and display points, then check if enough for a win
    p2button.addEventListener('click', () => {
        let isGameOver = gameStatus(p1Score, p2Score, winningScore);
        console.log(isGameOver)
        if (isGameOver === false) {
            document.querySelector("#rounds").disabled = true;
            p2Score += 1
            updateDisplay(p1Score, p2Score);
            resultChecker(p1Score, p2Score, winningScore);
        }
    });

    reset = () => {
        p1Score = 0;
        p2Score = 0;
        updateDisplay(p1Score, p2Score);
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