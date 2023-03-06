Function.prototype.hyapply = function (thisArg, argArray) {

  // console.log(argArray);
  // 1. 获取到我们要执行的函数
  var fn = this

  // 2. 处理绑定的 thisArg 
  thisArg = thisArg ? Object(thisArg) : window

  // 3. 执行函数
  thisArg.fn = fn 

  // 在没有传参数时候 argArray 为undefined ...argArray 会报错
  // 所有要判断
  // var reslut
  // if (!argArray) {   //  argArray 没有值的时候(没有传参数)
  //   reslut = thisArg.fn() 
  // } else {   // 有传参数
  //   reslut = thisArg.fn(...argArray) 
  // }
  argArray = (argArray !== null && argArray !== undefined) ? argArray : []
  var reslut = thisArg.fn(...argArray) 
  

  delete thisArg.fn

  // 最终返回 结果 reslut
  return reslut
}

function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2);
  return num1 + num2
} 

function foo(num) {
  console.log(num);
  return num
}

function bar() {
  console.log("bar函数被执行了", this);
}

// 系统的调用
// var reslut = sum.apply('abc', [20, 20])
// console.log('系统的调用:', reslut);

//自己实现调用
// var reslut = sum.hyapply('abc', [20, 20])
// console.log('系统的调用:', reslut);

// var reslut2 = foo.hyapply(123, [10])
// console.log(reslut2);
bar.hyapply(0)