// 第一个参数依然是模板字符串的整个字符串， 只是被切成 多块 放到了数组中
// 第二个参数是模板字符串中 第一个 ${}

function foo(m, n, x) {
  console.log(m, n, x);
}

// foo(20, 30)


// 另外一种调用函数的方式  标签模板字符串

const name = 'why'
const age = 18

foo``
foo`hello${name}wo${age} world`