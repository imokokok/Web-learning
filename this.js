'use strict';

//this的学习和深入理解

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const imokok = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
imokok.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = imokok.calcAge;
matilda.calcAge();

const f = imokok.calcAge;
f();

//全局环境中的this指针指向全局对象，注意嵌套函数和箭头函数的this绑定
