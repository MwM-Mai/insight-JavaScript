
// foo 是纯函数
// 1. 相同的输入一定产生相同的输出
// 2. 在执行的过程中没有产生副作用
function foo(num1, num2) {  
  return num1 * 2 + num2 * num2
}

var fn = foo(10, 20)


// bar 不是纯函数 
// bar 函数在执行的过程中修改了外部的全局变量 name ，产生了副作用
var name = 'abc'
function bar() {
  console.log("bar其他的代码执行");
  name = 'cba'
}

bar()
console.log(name);


// baz 不是一个纯函数 因为我们修改了传入的参数
function baz(info) {
  info.age = 100
}

var obj = {
  name: 'why',
  age: 18
}

baz(obj)
console.log(obj);


// test 是一个纯函数
// function test(info) {
//   return {
//     ...info,
//     age: 100
//   }
// }

// test(obj)

