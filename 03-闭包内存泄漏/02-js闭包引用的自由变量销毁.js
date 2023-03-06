function foo() {
  var name = 'why'
  var age = 18
  function bar() {
    debugger     // 代码运行到这里停止
    console.log(name);
  }

  return bar
}

var fn = foo()
fn()

