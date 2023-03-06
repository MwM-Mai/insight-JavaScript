// 暂时性死区: 在一个代码块中，使用let/const声明变量，在声明变量之前，变量是无法访问的

var foo = 'foo'

if (true) {
  console.log(foo);

  let foo = 'abc'
}


function bar() {
  console.log(foo);

  let foo = 'nba'
}

bar()