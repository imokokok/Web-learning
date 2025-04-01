'use strict';

// Hoisting的学习和深入了解

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Imokokok';
let job = 'student';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//1.hoisting仅适用于var和函数声明的作用域内，let const不会被提升
//2.尽量少使用var定义
//3.箭头函数是表达式，而不是声明，不会被提升到作用域顶部
//需要注意的是var关键字的使用会定义一个全局窗口变量
//函数表达式（使用 var 或 let/const 声明的函数）只会提升变量名，不会提升函数本身
