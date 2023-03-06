function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(2222)
      reject(1111)
    }, 1000)
  })
}

// async function foo() {
//   // await 表达式有一个返回值(promise)
//   await requestData()

//   console.log('--------------');
// }


// reject 值  如果 promise 调用的是 reject 那么 await 返回的值 会作为 foo 函数 返回 reject的值
async function foo() {
  const err = await requestData()
  console.log('err', err);
}

foo().catch(err => {
  console.log(err);
})