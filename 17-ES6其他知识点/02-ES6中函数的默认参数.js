// ES6之前给参数默认值 m = m || 20

function foo(m = 10, n = 20) {
  console.log(m, n);
}

foo()


// 对象参数和默认值以及解构
function bar({ name, age } = { name: 'james', age: 39 }) {
  console.log(name, age);
}

bar()


// 另外一种写法
function baz({ name = 'kobe', age = 18 } = {}) {
  console.log(name, age);
}

baz()

// 有默认值的 形参最后放到最后



// 有默认值的函数的lenght属性

// 有默认值的参数不算在 函数的 lenght 内  并且 之后的 参数都不会算账在 lenght 内

function foo1(m, n, x = 10, x, y) {

}

console.log(foo1.length);