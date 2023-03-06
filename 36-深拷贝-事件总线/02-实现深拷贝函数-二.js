function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}


// map = new WeakMap() 解决循环引用问题 在参数设置 设置为默认值 是为了不在 全局引用 优化内存空间
function deepClone(originValue, map = new WeakMap()) {
  // 判断如果是Set 类型 需要重新创建 Set 并且拷贝 值
  if (originValue instanceof Set) {
    // console.log(originValue);
    return new Set([...originValue])
  }

  // 判断如果是Map 类型 需要重新创建 Set 并且拷贝 值
  if (originValue instanceof Map) {
    // console.log(originValue);
    return new Set([...originValue])
  }


  // 判断如果是 Symbol的value 那么创建一个新的Symbol
  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 判断是否为函数 如果是函数直接返回 因为函数具有作用域 可复用代码
  if (typeof originValue === 'function') {
    return originValue
  }

  // 判断传入的值 是否是对象
  if (!isObject(originValue)) return originValue

  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断传入的是数组还是对象
  const newObj = Array.isArray(originValue) ? [] : {}

  // 在创建 newObj对象时候 添加到 map 可以判断是否被循环引用 如果被循环引用 那么 map.has()方法可以判断 map是否存在已有对象 解决栈溢出问题
  map.set(originValue, newObj)

  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key], map)
  }


  // 因为当Symbol为key时 获取不到 Symbol 所有要特殊处理
  const symbolkeys = Object.getOwnPropertySymbols(originValue)
  for (const sKey of symbolkeys) {
    newObj[sKey] = deepClone(originValue[sKey], map)
  }

  return newObj

}

let s1 = Symbol('aaa')
let s2 = Symbol('bbb')


const obj = {
  name: 'why',
  age: 18,
  friend: {
    name: 'james',
    address: {
      city: '克利夫兰'
    }
  },
  // 数组类型
  hobbies: ['篮球', '橄榄球'],
  // 函数类型  函数具有作用域 可复用 所有没必要 拷贝函数
  foo() {
    console.log('foo function');
  },

  // Symbol作为key和value 不同处理
  [s1]: 'abc',
  s2: s2,

  // Set/Map
  set: new Set([11, 22, 33, 44]),
  map: new Map([['aaa', 'aaa'], ['bbb', 'bbb'], ['ccc', 'ccc'], ['ddd', 'ddd']])
}

const newObj = deepClone(obj)
console.log(newObj === obj);
obj.friend.address = '阿克伦'
console.log(newObj);


// 循环引用问题
newObj.inter = newObj
console.log(newObj.inter.inter.inter);