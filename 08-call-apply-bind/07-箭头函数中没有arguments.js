// 箭头函数中没有 arguments arguments 指向上层作用域
// window下没有arguments 报错
// var foo = () => {
//   console.log(arguments);
// }

// foo() 


// 小案例

function bar() {
  return fn = () => {
    console.log(arguments);
  }
}

var fn = bar(123)
fn()