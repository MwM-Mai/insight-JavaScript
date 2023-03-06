// function foo() {
//   console.log('函数被调用了', this);
// }

// foo()直接调用和call/apply调用的不同在于this绑定的不同
// foo直接调用指向的是全局对象(window)
// foo()

// var obj = {
//   name: 'why'
// }

// 1. call和apply可以指定this的绑定对象
// foo.call(obj)
// foo.apply(obj)

// 2. call 和 apply 有何区别？
// !!! 传参 call 是以剩余参数形式
// !!! apply 是以数组形式传参
function sum(num1, num2) {
  console.log(this, num1 + num2);
}

// sum(10, 20)
sum.call("call", 20, 30)
sum.apply("apply", [20, 30])

// 3. call 和 apply在指向函数时， 是可以明确绑定 this， 这个绑定规则称之为显示绑定