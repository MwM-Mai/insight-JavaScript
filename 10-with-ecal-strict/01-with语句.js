// 'use strict'
// 'use strict' 严格模式下不能包含 with语句 会报错  

var message = "Hello word"
console.log(message);

// with(对象)语句: 可以形成自己的作用域 
var obj = {
  name: 'why',
  age: 'obj age'
}

var age = 20

function foo() {
  function bar() {
    with (obj) {
      console.log(message);
      console.log(age);
    }
  }
  bar()
}

foo()