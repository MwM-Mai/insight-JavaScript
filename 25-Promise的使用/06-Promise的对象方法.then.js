// Promise 有哪些对象方法
// console.log(Promise.prototype);
// console.log(Object.getOwnPropertyDescriptors(Promise));



const promise = new Promise((resolve, reject) => {
  resolve('哈哈哈哈哈')
})

// 1. 同一个Promise可以被多次调用 .then 方法
// 当我们的 resolve 方法被调用时 所有的 then 方法传入的回调函数都被调用
// promise.then(res => {
//   console.log(res);
// })

// promise.then(res => {
//   console.log(res);
// })

// 2. then 方法传入的回调函数是可以有返回值的
// then 方法本身也是有返回值的 返回值 是 Peomise
// 2.1 如果返回的是普通值(数字/字符串/平台对象/undefined) 那么这个普通的值会被作为新的Promise resolve 的值(resolve的参数)
// promise.then(res => {
//   console.log(res);
//   return 111
// }).then(res => {
//   console.log(res);
//   return 222
// }).then(res => {
//   console.log(res);
// })

// 2.2 如果返回的是 Promise
// promise.then(res => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(123)
//     }, 1000)
//   })
// }).then(res => {
//   console.log(res);
// })

// 2.3 如果返回的是 一个含有 then 方法的对象(实现了thenable)
promise.then(res => {
  console.log(res);
  return ({
    then(resolve, reject) {
      resolve(555)
    }
  })
}).then(res => {
  console.log(res);
})