'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
console.log(btnOpen);

//打开模块
const openModal = function () {
  console.log('I click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//关闭模块
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//使用按键退出模块
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
