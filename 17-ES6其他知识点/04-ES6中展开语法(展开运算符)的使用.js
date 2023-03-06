const names = ['abc', 'cba', 'nba']
const name = 'james'
const info = {
  name: 'james',
  age: 18
}

// 1. 函数调用时
function foo(x, y, z) {
  console.log(x, y, z);
}

foo.apply(null, names)
foo(...names)


// 构建数组

const newNames = [...names, ...name]
console.log(newNames);

// 3. 构建对象字面量 ES2018(ES9)

const obj = { ...info, address: '北京市' }
console.log(obj);


// 补充： 展开运算符 其实就是浅拷贝

