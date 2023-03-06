// 隐式绑定: object.fn()
// object对象会被js引用绑定到fn函数中的this里面



// 案例1
// function foo() {
//    console.log(this);
// }

// var obj = {
//   name: "why",
//   foo
// }

// obj.foo()


// 案例2
var obj = {
  name: 'why',
  eating() {
    console.log(this.name + '吃东西');
  },
  running() {
    console.log(this.name + '在跑步');
  }
}

obj.eating()
obj.running()