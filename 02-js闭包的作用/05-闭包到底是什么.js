// 闭包是由两部分组成的: 函数 + 可以访问的自由变量

function foo() {
  var name = 'foo'
  function bar() {
    console.log('bar', name);
  }

  return bar
}

var fn = foo() 
fn()