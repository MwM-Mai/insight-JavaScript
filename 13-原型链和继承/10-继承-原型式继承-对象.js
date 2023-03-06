var obj = {
  name: 'why',
  age: 18
}

// 原型式继承函数
// 方案1  
function createObject1(o) {
  var newObj = {}
  // setPrototypeOf 给 newObj对象 设置原型  
  Object.setPrototypeOf(newObj, o)
  return newObj
}

var info = createObject1(obj)

console.log(info.__proto__);  // info.__proto__ 指向的是 obj 对象


// 方案2
function createObject2(o) {
  function Fn() { }
  Fn.prototype = o
  newObj = new Fn()
  return newObj
  // newObj.__proto__ === Fn.prototype = 0
}

var info2 = createObject2(obj)

console.log(info2.__proto__);  // info.__proto__ 指向的是 obj 对象



// 方案3
//最新的ECMA(es)版本中 有Object.create() 方法

var info3 = Object.create(obj)  // 以obj为原型对象创建 info3 对象
console.log(info3.__proto__);
