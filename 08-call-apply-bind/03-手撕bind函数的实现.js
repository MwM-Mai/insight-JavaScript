Function.prototype.hybind = function (thisArg, ...argsArray) { 
  // 1. 获取到真实需要调用的函数
  var fn = this

  // 2. 绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // bind 函数返回的是函数
  return function (...args) {
    thisArg.fn = fn
    var newArgs = [...args, ...argsArray]
    console.log(thisArg);
    var reslut = thisArg.fn(...newArgs)
    delete thisArg.fn
    return reslut
  }
}

function foo() {
  console.log("bind函数被执行了", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行了", this, num1, num2);
  return num1 + num2
}

// 系统bind使用
// var bar = foo.bind("abc")
// bar()

// bind 传参的方式
// var newSum = sum.bind("aaa", 10, 20)
// newSum()

// var newSum = sum.bind("aaa")
// newSum(10, 20)

// var newSum = sum.bind("aaa", 10)
// newSum(20)



// 我们自己实现函数bing的方法
var bar = foo.hybind("aaa")
bar()

var newSum = sum.hybind("abc", 10)
var reslut = newSum(20)
console.log(reslut);