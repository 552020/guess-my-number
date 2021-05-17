'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎈';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const secretNumber = () => Math.floor(Math.random() * 20); // Not sure cuase I wrote it as a function
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.score').value;
// console.log(document.querySelector('.score').value);
// console.log(score, typeof score);

const play = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('play ' + highscore);
  //   console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // if the fiel is empty we get a 0 and 0 is a falsy value!
    document.querySelector('.message').textContent = 'No number! 😑';
    document.querySelector('.message').style.color = 'red';
    document.querySelector('.message').style.backgroundColor = 'yellow';

    document.querySelector('body').style.backgroundColor = 'pink';
    // When player wins
  } else if (guess === secretNumber) {
    score = document.querySelector('.score').textContent;
    console.log('score ' + score);
    console.log('highscore ' + highscore);
    document.querySelector('.message').textContent = 'Yes! 🎉';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // HIGHSCORE IF VERSION
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // HIGHSCORE TERNARY OPERATOR VERSION
    // score > highscore
    //   ? (document.querySelector('.highscore').textContent = score)
    //   : (document.querySelector('.highscore').textContent = highscore);

    // REFACTOR ** START */
    // if too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too high! 🚀';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You loose! 😱';

    //       document.querySelector('.score').textContent = 0;
    //     }
    //     // if too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too low! 🕸';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You loose! 😱';

    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }

    // REFACTOR NEW
  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = 'Too high! 🚀')
        : (document.querySelector('.message').textContent = 'Too low! 🕸');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose! 😱';

      document.querySelector('.score').textContent = 0;
    }
  }
  // if too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low! 🕸';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You loose! 😱';

  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // REFACTOR ** END
};

document.querySelector('.check').addEventListener('click', play);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') play();
  //   {
  //     const guess = Number(document.querySelector('.guess').value);

  //     //   console.log(guess, typeof guess);

  //     //When there is no input
  //     if (!guess) {
  //       // if the fiel is empty we get a 0 and 0 is a falsy value!
  //       document.querySelector('.message').textContent = 'No number! 😑';
  //       document.querySelector('.message').style.color = 'red';
  //       document.querySelector('.message').style.backgroundColor = 'yellow';

  //       document.querySelector('body').style.backgroundColor = 'pink';
  //       // When player wins
  //     } else if (guess === secretNumber) {
  //       document.querySelector('.message').textContent = 'Yes! 🎉';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.number').style.width = '30rem';
  //       document.querySelector('.number').textContent = secretNumber;

  //       // When too high
  //     } else if (guess > secretNumber) {
  //       if (score > 1) {
  //         document.querySelector('.message').textContent = 'Too high! 🚀';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('.message').textContent = 'You loose! 😱';

  //         document.querySelector('.score').textContent = 0;
  //       }
  //       // When too low
  //     } else if (guess < secretNumber) {
  //       if (score > 1) {
  //         document.querySelector('.message').textContent = 'Too low! 🕸';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('.message').textContent = 'You loose! 😱';

  //         document.querySelector('.score').textContent = 0;
  //       }
  //     }
  //   }
});

const reset = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', reset);

// CHALLENGE 1
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀
