// 什么是内存泄漏: 当js代码中存在函数时, js引擎会为其开辟空间对象 执行函数结束后不再执行该函数 AO 没有被销毁 就存在内存泄漏

// 闭包有可能存在内存泄漏
// 如何辨别AO对象是否被销毁 从根对象开始能找到(指向)的对象不会被销毁

function foo() {
  var name = 'why'
  var age = 18
  function test() {
    console.log(name);
    console.log(age);
    
  }
  return test
}



var fn = foo()

fn()



// 解决内存泄漏问题
// fn = null
