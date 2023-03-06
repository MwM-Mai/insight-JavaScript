//结论： new 关键字不能和call/apply一起使用

// new > bind

function foo() {
  console.log(this);
}

const bar = foo.bind("abc")

var obj = new bar()

// new > 显示绑定(call/apply/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)