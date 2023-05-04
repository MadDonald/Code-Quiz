const highScoresList = document.getElementById('high-scores-list');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const goBackButton = document.getElementById('go-back');
const clearHighScoresButton = document.getElementById('clear-high-scores');

highScoresList.innerHTML = highScores
    .map(score => `<li>${score.initials} - ${score.score}</li>`)
    .join('');

goBackButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

clearHighScoresButton.addEventListener('click', () => {
    localStorage.removeItem('highScores');
    highScoresList.innerHTML = '';
});
