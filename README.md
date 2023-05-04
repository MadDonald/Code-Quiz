# Code Quiz

This is a timed JavaScript fundamentals quiz that allows users to test their knowledge, compare their scores with their peers, and save their high scores.

## Features

- Timed quiz on JavaScript fundamentals
- Multiple-choice questions
- Time penalty for incorrect answers
- High scores stored in the browser's local storage
- Responsive user interface

## Getting Started

To get started with this project, simply clone or download the repository and open the `index.html` file in your browser.

## File Structure

- `index.html`: The main HTML file containing the structure for the quiz
- `high_scores.html`: The HTML file containing the structure for the high scores page
- `styles.css`: The CSS file containing the styles for the quiz and high scores pages
- `script.js`: The JavaScript file containing the logic for the quiz
- `high_scores.js`: The JavaScript file containing the logic for the high scores page

## Usage

1. Open the `index.html` file in your browser.
2. Click the "Start Quiz" button to begin the quiz.
3. Answer the multiple-choice questions within the time limit.
4. When the quiz is over, enter your initials and click "Save Score" to save your score to the high scores list.
5. View the high scores list by navigating to the `high_scores.html` page.

##License
This project is open source and available under the MIT License.

## Customization

To add your own questions and answers, edit the `questions` array in the `script.js` file. Each object in the array should have a `question` property (the question text) and an `answers` property (an array of answer objects). Each answer object should have a `text` property (the answer text) and a `correct` property (a boolean indicating whether the answer is correct).

Example question object:

```javascript
{
    question: 'What is the correct syntax for referring to an external script called "script.js"?',
    answers: [
        { text: '<script src="script.js">', correct: true },
        { text: '<script href="script.js">', correct: false },
        { text: '<script ref="script.js">', correct: false },
        { text: '<script link="script.js">', correct: false }
    ]
}
