// 封装一个响应式的函数
// let creativeFns = []    // name发生改变的所有需要重新执行的函数

// 当前需要收集的响应式函数
let activeReactiveFn = null


/**
 * Depend 优化:
 * 1 depend 方法
 * 2 使用Set来保存依赖 而不是数组
 */

// 收集依赖 不同的属性 发生变化时 都触发
class Depend {
  constructor () {
    this.creativeFns = []
  }

  // addDepend(fn) {
  //   this.creativeFns.push(fn)
  // }

  depend() {
    if (activeReactiveFn) {
      this.creativeFns.push(activeReactiveFn)
      this.creativeFns = [...new Set(this.creativeFns)]
    }
  }

  notify() {
    this.creativeFns.forEach(fn => {
      fn()
    })
  }
}


// 封装一个响应式函数
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
} 


// 封装一个获取 depend 函数
const targetMap = new WeakMap()
function getDepend(target, key) {   // obj name
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key 获取 depend 对象
  let depend = map.get(key)

  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
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
    // depend.notify()
    const depend = getDepend(target, key)

    depend.notify()
    // console.log(depend);
  },

  get(target, key, receiver) {
    // 根据target/key获取对应的depend
    const depend = getDepend(target, key)
    // 给depend对象中添加响应函数
    // depend.addDepend(activeReactiveFn)
    depend.depend()

    return Reflect.get(target, key, receiver)
  }
}) 

// watchFn

watchFn(() => {
  console.log(objProxy.name, '---------------------');
  console.log(objProxy.name, '+++++++++++++++++++++');
})


objProxy.name = 'james'
