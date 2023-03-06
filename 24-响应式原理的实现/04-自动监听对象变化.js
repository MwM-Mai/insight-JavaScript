// 封装一个响应式的函数
// let creativeFns = []    // name发生改变的所有需要重新执行的函数

// 收集依赖 不同的属性 发生变化时 都触发
class Depend {
  constructor () {
    this.creativeFns = []
  }
  addDepend(fn) {
    this.creativeFns.push(fn)
    console.log(this.creativeFns);
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

// 监听对象属性的变化  Proxy/Object.defineproperty
const objProxy = new Proxy(obj, {
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depeng.notufy()
  },
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})

function foo() {
  const newName = objProxy.name
  console.log('你好啊, 李银河');
  console.log('Hello World');
  console.log(objProxy.name + 'foo------');
}
watchFn(foo)


function demo() {
  console.log(objProxy.name + 'demo---------');
}
watchFn(demo)

watchFn(function () {
  console.log(objProxy.age + 'age被修改');
})

objProxy.name = 'obj'
// creativeFns.forEach(fn => {
//   fn()
// })

objProxy.age = 23