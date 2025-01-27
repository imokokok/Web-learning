//引入模块

//import {
//addToCart,
//totalPrice as tp,
//totalQuantity as tq,
//} from './shoppingCart.js';

//addToCart('bread', 5);
//console.log(tp, tq);

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('cake', 4);
// console.log(shoppingCart.totalPrice, shoppingCart.totalQuantity);

import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('cake', 4);
add('bread', 5);

console.log(cart);

/*
// Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// 不够简洁
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

//模块模式

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// CommonJS Modules
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/
