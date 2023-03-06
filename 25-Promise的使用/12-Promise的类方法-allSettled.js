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

// 需求: 无论 所有的 prmise 捕获的是 fulfilled 还是 rejected 都想要得到 他们的返回结果
Promise.allSettled([p1, p2, p3, 'aaa']).then(res => {
  console.log(res);
})