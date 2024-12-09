'use strict';

// 选择元素
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, currentPlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//切换玩家
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//初始化游戏
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//实现掷色子功能
btnRoll.addEventListener('click', function () {
  if (playing) {
    //创建色子
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //放置色子
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //检查点数
    if (dice !== 1) {
      //添加当前点数
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore; //更新得分
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //添加当前玩家得分
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    //赢得游戏
    if (scores[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      //切换到另一个玩家
      switchPlayer();
    }
  }
});

//重新开始游戏
btnNew.addEventListener('click', init);
