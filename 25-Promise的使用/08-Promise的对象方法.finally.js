// finally 方法 是 ES9 新增的 无论 Promise 是 成功状态(fulfilled) 还是 失败状态(rejected) 最终都会执行的代码
// finally 方法 不接收参数

const promise = new Promise((resolve, reject) => {
  // resolve(123)
  reject('rejected status')
  // throw new Error('rejected status')
})

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log('finally status');
})