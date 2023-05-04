const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainerElement = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const initialsForm = document.getElementById('initials-form');

let shuffledQuestions, currentQuestionIndex, timer, timeLeft;

const questions = [
    {
        question: 'Which of the following is NOT a JavaScript data type?',
        answers: [
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Boolean', correct: false },
            { text: 'Character', correct: true }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answers: [
            { text: '<script src="script.js">', correct: true },
            { text: '<script href="script.js">', correct: false },
            { text: '<script ref="script.js">', correct: false },
            { text: '<script link="script.js">', correct: false }
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function = myFunction()', correct: false },
            { text: 'function:myFunction()', correct: false },
            { text: 'function myFunction()', correct: true },
            { text: 'myFunction() = function', correct: false }
        ]
    },
    {
        question: 'How can you add a comment in a JavaScript file?',
        answers: [
            { text: '// This is a comment', correct: true },
            { text: '<!-- This is a comment -->', correct: false },
            { text: '/* This is a comment */', correct: true },
            { text: '# This is a comment', correct: false }
        ]
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
            { text: 'onchange', correct: false },
            { text: 'onmouseclick', correct: false },
            { text: 'onclick', correct: true },
            { text: 'onmouseover', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
initialsForm.addEventListener('submit', saveScore);

function startGame() {
    startButton.classList.add('hidden');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    timeLeft = 60; // Set the time limit for the quiz in seconds
    questionContainerElement.classList.remove('hidden');
    timer = setInterval(updateTime, 1000);
    setNextQuestion();
}

function updateTime() {
    timeLeft -= 1;
    document.getElementById('time-remaining').innerText = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (!correct) {
        timeLeft -= 10; // Subtract 10 seconds for incorrect answers
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    questionContainerElement.classList.add('hidden');
    resultContainerElement.classList.remove('hidden');
    scoreElement.innerText = timeLeft;
}

function saveScore(e) {
    e.preventDefault();
    const initials = document.getElementById('initials').value;
    const score = {
        initials: initials,
        score: timeLeft
    };

    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Redirect to the high scores page
    window.location.href = 'high_scores.html';
}

