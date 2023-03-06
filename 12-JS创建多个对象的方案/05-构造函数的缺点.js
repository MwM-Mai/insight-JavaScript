// 构造函数里面的方法每次调用都需要开辟一个新的 函数对象 调用100次 开辟100个
// 耗费空间

function foo() {
  return function() {

  } 
}

var fn1 = foo()
var fn2 = foo()

// fn1 和 fn2 不是同一个函数对象
console.log(fn1 === fn2);
