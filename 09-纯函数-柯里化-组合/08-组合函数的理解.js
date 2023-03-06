function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var count = 10
var reslut = square(double(count))
console.log(reslut);

var num = 100 
var reslut = square(double(num))
console.log(reslut);


// 实现最简单的组合函数
// 组合函数：在一个函数执行完 后执行另一个函数

function composeFn(fn1, fn2) {
  return function (count) {
    return fn2(fn1(count))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(20));