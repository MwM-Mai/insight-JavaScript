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
      // queueMicrotask() 方法 是把一个函数加入到微任务里面
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PADING) {
          console.log('resolve被调用');
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
      // 微任务
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

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {

    onRejected = onRejected || (err => { throw err })

    return new HYPromise((resolve, reject) => {
      // 如果在 then 调用时 状态已经确定下来了
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try/catch/finally 语句用于处理代码中可能出现的错误信息。 错误可能是语法错误，通常是程序员造成的编码错误或错别字。也可能是拼写错误或语言中缺少的功能
        // 既如果 try {} 代码块抛出异常了 则执行 catch {} 的代码块
        try {
          let value = onFulfilled(this.value)
          resolve(value)
        } catch (err) {
          reject(err)
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        try {
          let reason = onRejected(this.reason)
          resolve(reason)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === PROMISE_STATUS_PADING) {
        // 将成功的回调和失败的回调添加到数组中
        if (onFulfilled) this.onFulfilledCallbacks.push(() => {
          try {
            // 把箭头函数传入数组 在遍历数组的函数中执行函数 回到 onFulfilled 函数 可以获取到函数的结果
            let value = onFulfilled(this.value)
            resolve(value)
          } catch (err) {
            reject(err)
          }
        })
        if (onRejected) this.onRejectedCallbacks.push(() => {
          try {
            let reason = onRejected(this.reason)
            resolve(reason)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
  }

  catch(onRejected) {
    this.then(undefined, onRejected)
  }
}

const promise = new HYPromise((resolve, reject) => {
  reject(2222)
  resolve(1111)
})

promise.then(res => {
  console.log('res1', res);
}).catch(err => {
  console.log(err);
})
