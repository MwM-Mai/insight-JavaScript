const obj1= {name: 'why'}

// Map 和 weakMap 的区别二
const map = new Map()
map.set(obj1, '123')   // 强引用

const weakMap = new WeakMap()
weakMap.set(obj1, '123') // 弱引用


// 区别一 不能使用基本数数据类型作为 key

// weakMap 常见方法
// .get() 方法 获取某个属性的值
// .has() 判断是否有该属性
// delete() 删除某个属性的方法



// weakMap 的应用场景(vue3的响应式原理)
const obj2 = {
  name: 'obj2',
  age: 18
}

const obj3 = {
  name: 'obj3',
  age: 20
}

function objNamefoo() {
  console.log('objNamefoo被执行');
}

function objNamefoo2() {
  console.log('objNamefoo被执行');
}

function objAgefoo() {
  console.log('objAgefoo被执行');
}

function objAgefoo2() {
  console.log('objAgefoo2被执行');
}



const weakMap2 = new WeakMap()

// 收集依赖结构
const map2 = new Map()
map2.set('name', [objNamefoo, objNamefoo2])
map2.set('age', [objAgefoo, objAgefoo2])


weakMap2.set(obj, map)

// 当数据改变的时候
obj.name = 'james'
const targetMap = weakMap2.get(obj)
const fns = targetMap.get('name')
fns.forEach(fn => fn())