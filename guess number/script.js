'use strict';

//这是有个猜数字小游戏
//通过此游戏熟悉dom操作

//初始化游戏
const number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //输入错误数字
    dispalyMessage('❌Please enter the correct number!');

    //回答正确
  } else if (guess === number) {
    dispalyMessage('You are right');

    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').textContent = number;

    //获得最高分
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //回答错误
  } else if (guess !== number) {
    if (score > 1) {
      dispalyMessage(guess > number ? '👇Guess smaller' : '👆Guess higher');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispalyMessage('Faliure!');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//重新开始游戏
document.querySelector('.again').addEventListener('click', function () {
  //初始化游戏
  const number = Math.trunc(Math.random() * 20) + 1;
  let score = 10;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  dispalyMessage('Start game');
});
