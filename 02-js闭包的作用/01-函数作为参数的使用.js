
// 将函数作为另外一个函数的参数
// function foo(fn) {
//   fn()
// }

// function bar() {
//   console.log('bar');
// }

// foo(bar)

function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

calc(3, 2, add)
calc(3, 2, sub)
calc(3, 2, mul)