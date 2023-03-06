const obj = {
  name: 'why',
  age: 18
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



const weakMap = new WeakMap()

// 收集依赖结构
const map = new Map()
map.set('name', [objNamefoo, objNamefoo2])
map.set('age', [objAgefoo, objAgefoo2])


weakMap.set(obj, map)

// 当数据改变的时候
obj.name = 'james'
const targetMap = weakMap.get(obj)
const fns = targetMap.get('name')
fns.forEach(fn => fn())