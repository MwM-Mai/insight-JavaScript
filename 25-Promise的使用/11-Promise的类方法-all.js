// Promise.all 创建多个 Promise

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(456)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(789)
    reject('rejected message')
  }, 3000)
})

// 需求: 并不想拿到某一个 promise 结果
//  等三个 Promise 都有结果再去获取到对应的结果

// all() 方法 传入参数 一个数组 数组是 Promiise  如果放的不是 Promise 那么会转成 Promise
// all 本身返回的是 Promise
Promise.all([p1, p2, p3, 'abc']).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})



// 意外: 在拿到所有结果之前 有一个 Promise 变成了 rejected 那么整个   Promise.all() 是 rejected
