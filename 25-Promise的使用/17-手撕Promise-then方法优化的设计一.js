const PROMISE_STATUS_PADING = "pading"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class HYPromise {
  constructor (executor) {
    this.status = PROMISE_STATUS_PADING    // 状态
    this.value = undefined     // resolve 的参数
    this.reason = undefined    // reject  的参数

    this.onFulfilledCallbacks = []    // 保存 then 方法 onFulfilled 的回调
    this.onRejectedCallbacks = []     // 保存 then 方法 onRejected 的回调 

    let resolve = (value) => {
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PADING) {

          console.log('resolve被调用');
          // queueMicrotask() 方法 是把一个函数加入到微任务里面
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          if (this.onFulfilledCallbacks) {
            this.onFulfilledCallbacks.forEach(onFulfilled => {
              onFulfilled(this.value)
            })
          }
        }
      })
    }

    let reject = (reason) => {
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PADING) {
          console.log('reject被调用');
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          if (this.onRejectedCallbacks) {
            this.onRejectedCallbacks.forEach(onRejected => {
              onRejected(this.reason)
            })
          }
        }
      })
    }

    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    // 如果在 then 调用时 状态已经确定下来了
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }

    if (this.status === PROMISE_STATUS_PADING) {
      // 将成功的回调和失败的回调添加到数组中
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }
}

const promise = new HYPromise((resolve, reject) => {
  resolve(1111)
  reject(2222)
})

promise.then(res => {
  console.log('res1', res);
}, err => {
  console.log(err);
})

promise.then(res => {
  console.log('res2', res);
})

setTimeout(() => {
  promise.then(res => {
    console.log('res3', res);
  })
})