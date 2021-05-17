'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //  Math.floor(Math.random() * 20);

let score = 20;
let highscore = 0;

let messageDom = document.querySelector('.message'); // still needed even with displayMessage

let numberDom = document.querySelector('.number');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const backgroundColorBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const play = function () {
  const guess = Number(document.querySelector('.guess').value);

  //*** if there is no input
  if (!guess) {
    // if the field is empty we get a 0 and 0 is a falsy value!
    displayMessage('No number! 😑'); // how to refactor with a function
    messageDom.style.color = 'red'; // how to refactor with a normal variable
    messageDom.style.backgroundColor = 'yellow';
    backgroundColorBody('pink');

    // If player wins-
  } else if (guess === secretNumber) {
    score = document.querySelector('.score').textContent;

    displayMessage('Yes! 🎉');
    backgroundColorBody('red');
    numberDom.style.width = '30rem';
    numberDom.textContent = secretNumber;
    // highscore: if version - a ternary version in the dirty file
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 🚀' : 'Too low! 🕸');
      score--;
      displayScore(score);
    } else {
      displayMessage('You loose! 😱');

      displayScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', play);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') play();
});

const reset = function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  numberDom.textContent = '?';
  document.querySelector('.guess').value = '';
  backgroundColorBody('#222');
  numberDom.style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', reset);
