const PROMISE_STATUS_PADING = "pading"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class HYPromise {
  constructor (executor) {
    this.status = PROMISE_STATUS_PADING    // 状态
    this.value = undefined     // resolve 的参数
    this.reason = undefined    // reject  的参数

    this.onFulfilled = []    // 保存 then 方法 onFulfilled 的回调
    this.onRejected = []     // 保存 then 方法 onRejected 的回调 

    let resolve = (value) => {
      if (this.status === PROMISE_STATUS_PADING) {
        this.status = PROMISE_STATUS_FULFILLED
        // queueMicrotask() 方法 是把一个函数加入到微任务里面
        queueMicrotask(() => {
          console.log('resolve被调用');
          this.value = value
          if (this.onFulfilled) {
            this.onFulfilled.forEach(onFulfilled => {
              onFulfilled(this.value)
            })
          }
        })
      }
    }

    let reject = (reason) => {
      if (this.status === PROMISE_STATUS_PADING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          console.log('reject被调用');
          this.reason = reason
          if (this.onRejected) {
            this.onRejected.forEach(onRejected => {
              onRejected(this.reason)
            })
          }
        })
      }
    }

    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    this.onFulfilled.push(onFulfilled)
    this.onRejected.push(onRejected)
  }
}

const promise = new HYPromise((resolve, reject) => {
  resolve(1111)
  // reject(2222)
})

promise.then(res => {
  console.log('res1', res);
}, err => {
  console.log(err);
})

promise.then(res => {
  console.log('res2', res);
})