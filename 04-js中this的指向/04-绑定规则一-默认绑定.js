// 默认绑定: 独立函数调用

// 案例1
// function foo() {
//   console.log(this);
// }

// foo()


// 案例2
// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1()
// }

// function foo3() {
//   console.log(this);
//   foo2()
// }

// foo3()


// 案例3
// var obj = {
//   name: 'why',
//   foo() {
//     console.log(this);
//   }
// }

// var bar = obj.foo
// bar()

// 案例4
// function foo() {
//   console.log(this);
// }
// var obj = {
//   name: 'why',
//   foo
// }

// var bar = obj.foo
// bar()


// 案例5
function foo() {
  return function () {
    console.log(this);
  }
}

var fn = foo()
fn()