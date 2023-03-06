/**
 * reslove(参数)
 * 1> 普通的值或者对象
 * 2> 传一个Promise
 *    那么当前的Promise状态会由传入的Promise决定
 *    相当于状态移交
 * 3> 传入一个对象，并且这个对象有实现then方法 那么也会执行该then方法 并且由该 then方法 决定后续状态
 */


// 传入 Promise 的特殊情况
// const newPromise = new Promise((resolve, reject) => {

// })

// new Promise((resolve, reject) => {
//   resolve(newPromise)
// }).then((res) => {
//   console.log('res', res);
// }).catch((err) => {
//   console.log('err', err);
// })


// 传入 对象 并且这个对象有实现then方法 那么也会执行该then方法 并且由该对象的 then方法 决定后续状态

new Promise((resolve, reject) => {
  const obj = {
    then(rejected, reject) {
      rejected('resolve message')
    }
  }
  resolve(obj)
}).then((res) => {
  console.log('res', res);
}).catch((err) => {
  console.log('err', err);
})