// const promise = new Promise((resolve, reject) => {
//   resolve(123)
//   // reject('rejected status')
//   // throw new Error('rejected status')
// })

// 1. 当 executor 抛出异常时 也是会调用错误(拒接) 捕获的回调函数
// promise.then(() => {

// }, err => {
//   console.log(err);
//   console.log('------------------------------------');
// })

// 2. 通过 catch 方法 来传入错误的捕获(拒接) 捕获回调函数
// Promise A+ 规范
// promise.catch(err => {
//   console.log(err);
//   console.log('---------------------------------------');
// })

// promise.then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     reject('then rejected status')
//   })
// }).catch(err => {
// 这个 catch 方法比较特殊 会优先捕获 primise 的异常  如果没有异常 那么会捕获 .then() 方法 的 promise的异常
//   console.log(err);
//   console.log('---------------------------------------');
// })

// 3. 拒接捕获问题(前面课程)

// 不报错
// promise.then(res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })


// 报错
const promise = new Promise((resolve, reject) => {
  // resolve(123)
  reject('rejected status')
  // throw new Error('rejected status')
})

// 因为两次的 promise 的调用是独立的 并没有相互影响 而 第一个 promise.then 并没有捕获(拒接) reject(没有处理reject) 所有报错
// promise.then(res => {
//   console.log(res);
// })

// promise.catch(err => {
//   console.log(err);
// })

// 4. catch 的返回值 也是返回给 promnise 的 resolve 除非 promise 回到 reject()
promise.catch(err => {
  console.log(err);
  return 'catch return value'
}).then(res => {
  console.log('res:', res);
}).catch(err => {
  console.log('err:', err);
})