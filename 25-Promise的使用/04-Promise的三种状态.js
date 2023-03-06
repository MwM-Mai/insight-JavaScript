// const promise = new Promise((resolve, reject) => {

// })

// promise.then(res => {

// }).catch(err => {

// })

// 完全等价于下面代码

const promise = new Promise((resolve, reject) => {
  console.log('----------');     // padeing 等待状态
}).then(res => {    // fulfilled/resolve 成功状态

}).catch(err => {   // rejected 失败状态

})