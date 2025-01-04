'use strict'

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
