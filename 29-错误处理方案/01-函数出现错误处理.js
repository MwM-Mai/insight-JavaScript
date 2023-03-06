/**
 * 如果有一个函数 在调用这个函数时如果出现了错误 那么我们一个修复这个错误
 */

function sum(num1, num2) {
  // 当我们传入的参数类型不正确时 应该告知调用者一个错误
  if (typeof num1 !== Number || typeof num2 !== Number) {
    // return    返回的是undefined
    throw 'parameters is error type~'
  }
  return num1 + num2
}

sum({ name: 'why' }, true)