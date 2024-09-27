const audio1 = document.getElementById('myAudio');
const audio2 = document.getElementById('myAudio2');

const playerMove = prompt('Enter Your Move (Stone, Paper, Sicssors)');

const moves = ['Stone', 'Paper', 'Sicssors'];



let Score = 0;


// Check if the player's move is valid
if (!moves.includes(playerMove)) {
    console.log('Invalid move. Please enter Stone, Paper, or Sicssors.');
} else {
    const movesIndex = Math.floor(Math.random() * moves.length);
    const computerMove = moves[movesIndex];

    console.log('Your move is:', playerMove, 'Computer Move is:', computerMove);

    // Determine the winner
    if (playerMove === computerMove) {
        console.log('It\'s a tie! Try again.');
    } else if (
        (playerMove === 'Stone' && computerMove === 'Sicssors') ||
        (playerMove === 'Paper' && computerMove === 'Stone') ||
        (playerMove === 'Sicssors' && computerMove === 'Paper')
    ) {
        console.log('Congratulations, you win!');
         Score + 1
        audio1.play();
    } else {
        console.log('You lose, try again.');
        audio2.play();
    }
}
