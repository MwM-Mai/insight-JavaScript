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
  }, 300)
})

// race 竞技/竞赛
// 只要有一个 Promise 状态 变成 fulfilled(成功) 那么就结束
Promise.race([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// 意外 如果在 状态 变成 fulfilled(成功) 之前 有一个 变成了 rejected(失败) 就会拿到 rejected 结果