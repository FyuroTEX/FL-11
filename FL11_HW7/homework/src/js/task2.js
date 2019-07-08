let randomNumber, playerNumber;
let prize = 0; let attempt = 0; let two = 2; let maxAttempt = 3;
let addPoket = 4; let gamePoket = 8; let resetPoket = 8;
let maxPrize = 100; let midPrize = 50; let lowPrize = 25;
let attemptPrize = [maxPrize, midPrize, lowPrize];
let attemptLeft = [maxAttempt, two, 1];
let newGame = true;
let playGame = confirm('Do you want to play a game?');
if (playGame) {
    while (attempt <= maxAttempt) {
        switch (true) {
            case attempt === 0:
                randomNumber = Math.floor(Math.random() * (gamePoket + 1));
                playerNumber = +prompt('Choose a roulette pocket number from 0 to ' + gamePoket +
                    '\n Attempts left: ' + attemptLeft[attempt] +
                    '\n Tottal prize: ' + prize +
                    '$ \n Possible prize on current attempt ' + attemptPrize[attempt] + '$', '');
                attempt++;
                break;
            case randomNumber === playerNumber:
                prize += attemptPrize[attempt - 1];
                gamePoket += addPoket;
                attempt = 0;
                alert('Congratulation, you won!   Your prize is: '
                    + prize + '$.');
                confirm('Do you want to continue?') ? playGame : attempt = maxAttempt + 1;
                attemptPrize = attemptPrize.map(p => p * two);
                break;
            case attempt === maxAttempt:
                alert('Thank you for your participation. Your prize is: ' + prize + '$');
                prize = 0;
                attempt = 0;
                gamePoket = resetPoket;
                attemptPrize = [maxPrize, midPrize, lowPrize];
                confirm('Do you want play again?') ? playGame
                    : attempt = maxAttempt + 1;
                break;
            case randomNumber !== playerNumber:
                playerNumber = +prompt('Choose a roulette pocket number from 0 to ' + gamePoket +
                    '\n Attempts left: ' + attemptLeft[attempt] +
                    '\n Tottal prize: ' + prize +
                    '$ \n Possible prize on current attempt ' + attemptPrize[attempt] + '$', '');
                attempt++;
                break;
            default:
                break;
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}


