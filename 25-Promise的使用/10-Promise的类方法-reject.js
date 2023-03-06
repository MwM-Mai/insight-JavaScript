
// 无论传入什么 值(普通值/Promise/含有 then方法 的对象) 都是一样的
const promise = Promise.reject('rejected status')

// 相当于下面代码
// const promise2 = new Promise((resolve, reject) => {
//   reject('rejected status')
// })

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})