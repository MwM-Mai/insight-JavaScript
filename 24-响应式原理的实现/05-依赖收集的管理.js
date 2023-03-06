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

  notify() {
    this.creativeFns.forEach(fn => {
      fn()
    })
  }
}

const depend = new Depend()
// 封装一个响应式函数
function watchFn(fn) {
  depend.addDepend(fn)
} 


// 封装一个获取 depend 函数
const targetMap = new WeakMap()
function getDepend(target, key) {   // obj name
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    // console.log(map);
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
    console.log(depend.creativeFns);

    depend.notify()
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

const info = {
  address: '北京市'
}

watchFn(function () {
  console.log(info.address, '监听address的变化');
})

objProxy.name = 'obj'

// // obj 对象
// // name => depend
// // age => depend
// const objMap = new Map()
// objMap.set('name', 'nameDepned')
// objMap.set('age', 'ageDepned')



// // info 对象
// // address => depend
// const infoMap = new Map()
// infoMap.set('address', 'addressDepend')


// const targetMap = new WeakMap()
// targetMap.set('obj', objMap)
// targetMap.set('info', infoMap)


// // obj.name
// const depend = target.get(obj).get('name')
// depend.notify()


