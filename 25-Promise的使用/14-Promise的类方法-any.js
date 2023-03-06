// any 方法 至少等到一个状态 为 fulfilled(成功) 时 才结束
// 如果 所有 Promise 的状态都是 rejected 的话 那么会等到 所有 Promise 状态为 rejected 返回 [AggregateError: All promises were rejected]
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(123)
    reject(123)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(456)
    reject(456)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(789)
    reject('rejected message')
  }, 300)
})


Promise.any([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
