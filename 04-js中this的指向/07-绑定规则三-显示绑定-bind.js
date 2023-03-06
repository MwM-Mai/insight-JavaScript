function foo() {
  console.log(this);
}

// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")

// bind方法改变this指向 生成新的函数
// 默认绑定和显示绑定bind冲突： 优先级 显示绑定 > 默认绑定
var newFoo = foo.bind("aaa")

newFoo()
newFoo()
newFoo()
newFoo()