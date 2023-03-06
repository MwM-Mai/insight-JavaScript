const PROMISE_STATUS_PADING = "pading"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class HYPromise {
  constructor (executor) {
    this.status = PROMISE_STATUS_PADING    // 状态
    this.value = undefined     // resolve 的参数
    this.reason = undefined    // reject  的参数


    let resolve = (value) => {
      if (this.status === PROMISE_STATUS_PADING) {
        console.log('resolve被调用');
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
      }
    }

    let reject = (reason) => {
      if (this.status === PROMISE_STATUS_PADING) {
        console.log('reject被调用');
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
      }
    }

    executor(resolve, reject)
  }

}

const promise = new HYPromise((resolve, reject) => {
  resolve()
  reject()
})