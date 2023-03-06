function hyCompose(...fns) {
  var length = fns.length
  // 判断 fns 参数中是否有不是函数作为参数传递进来
  fns.forEach(fn => {
    if (typeof fn !== 'function') {
      // 抛出异常
      throw new TypeError('Expected arguments are functions')
    }
  })


  return function (...args) {
    var index = 0
    var reslut = length ? fns[index].call(this, ...args) : args
    while (++index < length) {
      reslut = fns[index].call(this, reslut)
    }
    return reslut
  }
}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = hyCompose(double, square)
newFn(10)
console.log(newFn(10));