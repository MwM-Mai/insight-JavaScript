// 封装一个响应式的函数
// let creativeFns = []    // name发生改变的所有需要重新执行的函数

// 收集依赖 不同的属性 发生变化时 都触发
class Depend {
  constructor () {
    this.creativeFns = []
  }
  addDepend(fn) {
    this.creativeFns.push(fn)
  }

  notufy() {
    this.creativeFns.forEach(fn => {
      fn()
    })
  }
}

const depeng = new Depend()
// 封装一个响应式函数
function watchFn(fn) {
  depeng.addDepend(fn)
} 

// 对象的响应式

const obj = {
  name: 'why',   // 
  age: 18
}

function foo() {
  const newName = obj.name
  console.log('你好啊, 李银河');
  console.log('Hello World');
  console.log(obj.name + 'foo------');
}
watchFn(foo)


function demo() {
  console.log(obj.name+ 'demo---------');
}
watchFn(demo)

obj.name = 'obj'
// creativeFns.forEach(fn => {
//   fn()
// })
depeng.notufy()