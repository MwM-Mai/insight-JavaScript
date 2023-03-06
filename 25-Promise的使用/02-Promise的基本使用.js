function foo() {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

const fooPromise = foo()
// then() 方法传入的回调函数，会在promise执行resolve函数时 被回到
fooPromise.then(() => {
   
})

// catch() 方法传入的回调函数 会在promis执行reject函数时 被回调
fooPromise.catch(() => {

})


class Person {
  constructor (callBack) {
    let foo = () => {

    }
    let bar = () => {

    }
    callBack(foo, bar)
  }
}

const person = new Person((foo, bar) => {
  foo()
  bar()
})


// 传入的这个函数就会被称之为 executor
// > resolve 回调函数  在成功的时候调用
// > reject  回调函数  在失败的时候调用
const promise = new Promise((resolve, reject) => {
  // console.log('promise传入的函数被执行了');
  resolve()
})

promise.then()