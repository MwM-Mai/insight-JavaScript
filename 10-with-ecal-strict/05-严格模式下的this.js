'use strict'; 

// 在严格模式下， 自执行函数的this会指向undefined 
// 之前编写代码中, 自指向函数我们是没有使用过htis直接使用window
function foo() {
  console.log(this);
}

foo()

var obj = {
  name: 'why',
  foo
}

obj.foo()


setTimeout(() => {
  console.log(this);
})