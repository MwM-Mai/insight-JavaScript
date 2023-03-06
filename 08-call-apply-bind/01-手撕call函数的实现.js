// 给所有函数添加一个hycall方法 Function 是js内部的构造器 
Function.prototype.hycall = function (thisArg, ...args) {

  // ...args 剩余参数返回的是一个数组
  // console.log(args);

  // console.log('hycall函数被调用');
  
  // 实现在这里可以去执行调用的那个函数(foo)
  //问题: 得可以获取到哪一个函数执行了hycall
  
  // 1. 获取需要被执行的函数
  console.log(this);
  var fn = this

  // 2. 对thisArg转成对象 Object() 可以将 Number/String/Boolean 转成对象(防止传入的是非对象类型)
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
  
  // 3. 调用需要被执行的函数
  thisArg.fn = fn
  var reslut = thisArg.fn(...args)
  delete thisArg.fn

  // 将最终的结果返回出去
  return reslut
}

function foo() {
  console.log('foo函数被执行了', this);
}

function sum(num1, num2) {
  console.log("sum函数被执行了", this, num1, num2);
  return num1 + num2
}


// 系统的函数call方法
// var reslut sum.call(null, 20, 30)
// console.log(reslut);

// 自己实现的函数hycall方法
// (隐式绑定)
foo.hycall(null)
var reslut = sum.hycall(null, 10, 20)
console.log('hycall调用的', reslut);