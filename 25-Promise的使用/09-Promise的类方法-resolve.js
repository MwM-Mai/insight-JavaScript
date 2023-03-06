// Promise的类方法


// 转成Promise对象

// function foo() {
//   const obj = { name: 'why' }
//   return new Promise((resolve, reject) => {
//     resolve(obj)
//   })
// }


// foo().then(res => {
//   console.log(res);
// })


// 类方法 Promise.resolve
// 1. 普通的值
const promise = Promise.resolve({ name: 'why' })

// 相当于
const promise2 = new Promise((resolve, reject) => {
  resolve({ name: 'why' })
})

promise.then(res => {
  console.log(res);
})


// 2. 传入Promise
const promise3 = Promise.resolve(new Promise((resolve, reject) => {
  resolve(123456)
}))

promise3.then(res => {
  console.log(res);
})


// 3. 传入一个含有 then 方法 的对象(thenoble)
// 2. 传入Promise
const promise4 = Promise.resolve({
  then(resolve, reject) {
    resolve(1111111111)
  }
})

promise4.then(res => {
  console.log(res);
})