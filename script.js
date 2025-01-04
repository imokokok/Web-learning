'use strict';

//异步编程的学习

//使用restcountry API进行学习和展示
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentElement('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const rendercountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('get', 'https://restcountries.com/v3.1/name/${country}');
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render国家1
    rendercountry(data);

    //获取邻国(2)
    const [neighbor] = data.borders;

    if (!neighbor) return;

    //AJAX调用国家2
    const request2 = new XMLHttpRequest();
    request2.open('get', 'https://restcountries.com/v3.1/alpha/${neighbor}');
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      rendercountry(data2, 'neighbor');
    });
  });
};

const getCountryDate = function (country) {
  //国家1
  fetch('https://restcountries.com/v3.1/name/${country}')
    .then(response => {
      console.log(response);

      if (response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => rendercountry(data[0]));
  const neighbor = data[0].borders[0];

  if (!neighbor) return;

  //国家2
  return fetch('https://restcountries.com/v3.1/alpha/${neighbor}');

  fetch('https://restcountries.com/v3.1/alpha/${neighbor}')
    .then(response => json())
    .then(data => rendercountry(data, 'neighbor'))
    .catch(err => {
      console.error(`${err}❌`);
      renderError('Something went wrong');
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryDate('usa');
});

//事件循环练习
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');

//建立一个简单的Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

///////////////////////////////////////////
//异步函数的进阶
// 模拟一个用户数据库
const users = [
  { id: 1, name: 'Im', age: 25 },
  { id: 2, name: 'OK', age: 30 },
];

// 模拟异步获取用户数据的函数
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === userId);
      if (user) {
        resolve(user); // 用户存在，返回用户数据
      } else {
        reject(new Error('用户不存在')); // 用户不存在，抛出错误
      }
    }, 1000); // 模拟 1 秒延迟
  });
}

// 主函数：获取并处理用户数据
async function getUserData(userId) {
  try {
    console.log('正在获取用户数据...');
    const user = await fetchUser(userId); // 等待 fetchUser 完成
    console.log('获取到的用户数据:', user);
    return user; // 返回用户数据
  } catch (error) {
    console.error('捕获到错误:', error.message); // 捕获并处理错误
    throw error; // 可以选择重新抛出错误
  } finally {
    console.log('获取用户数据操作结束'); // 无论是否出错，都会执行
  }
}

// 调用主函数
(async () => {
  try {
    const user = await getUserData(1); // 获取 ID 为 1 的用户
    console.log('处理后的用户数据:', user);
  } catch (error) {
    console.error('主函数捕获到错误:', error.message);
  }
})();

//异步函数默认返回 Promise
//如果在异步函数中返回一个 Promise，JavaScript 会直接使用这个 Promise，而不会再次包装它

//promises并行

//promis.all
const fetchData1 = fetch('https://api.example.com/data1').then(response =>
  response.json()
);
const fetchData2 = fetch('https://api.example.com/data2').then(response =>
  response.json()
);
const fetchData3 = fetch('https://api.example.com/data3').then(response =>
  response.json()
);

Promise.all([fetchData1, fetchData2, fetchData3])
  .then(results => {
    console.log('所有数据:', results); // 结果是一个数组，顺序与传入的 Promise 数组一致
  })
  .catch(error => {
    console.error('出错:', error); // 任何一个 Promise 失败，都会进入 catch
  });

//返回所有 Promise 的结果数组。
//立即拒绝，返回第一个失败的原因

//promise.allSettled
const fetchData4 = fetch('https://api.example.com/data1').then(response =>
  response.json()
);
const fetchData5 = fetch('https://api.example.com/data2').then(response =>
  response.json()
);
const fetchData6 = fetch('https://api.example.com/data3').then(response =>
  response.json()
);

Promise.allSettled([fetchData1, fetchData2, fetchData3]).then(results => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`请求 ${index + 1} 成功:`, result.value);
    } else {
      console.error(`请求 ${index + 1} 失败:`, result.reason);
    }
  });
});

//无论成功或失败，都会等待所有 Promise 完成。
//每个 Promise 的结果是一个对象，包含 status（fulfilled 或 rejected）和 value 或 reason

//promise.race
const fetchData7 = fetch('https://api.example.com/data1').then(response =>
  response.json()
);
const fetchData8 = fetch('https://api.example.com/data2').then(response =>
  response.json()
);

Promise.race([fetchData1, fetchData2])
  .then(result => {
    console.log('第一个完成的结果:', result);
  })
  .catch(error => {
    console.error('第一个完成的错误:', error);
  });

//返回第一个完成的 Promise 的结果（无论成功或失败）。
//需要快速获取第一个完成的 Promise 结果的场景（例如超时机制）
