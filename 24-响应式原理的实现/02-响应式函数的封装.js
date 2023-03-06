// 封装一个响应式的函数
let creativeFns = []
function watchFn(fn) {
  creativeFns.push(fn)
} 

// 对象的响应式

const obj = {
  name: 'why',
  age: 18
}

function foo() {
  const newName = obj.name
  console.log('你好啊, 李银河');
  console.log('Hello World');
  console.log(obj.name + 'foo------');
}
watchFn(foo)

function bar() {
  console.log('普通的其他函数');
  console.log('这个函数不需要有如何的响应式');
}

function demo() {
  console.log(obj.name+ 'demo---------');
}
watchFn(demo)

obj.name = 'obj'
creativeFns.forEach(fn => {
  fn()
})