const obj = {
  name: "why",
  age: 18
}

// Proxy() 两个参数 第一个 对象 第二个 捕获器对象
// 捕获器(13种) 如果不进行重写的话 会自动完成对对象的操作 增删改查
// 暂时不知道有哪些捕获器对象 先写 {}
const objProxy = new Proxy(obj, {
  //重写捕获器 

  // 获取值时的捕获器 target: 代理的对象  
  get(target, key) {
    console.log('重写了get捕获器');
    return target[key]
  },

  // 设置值时的捕获器
  Set(target, key, newValue) {
    target[key] = newValue
  },

  // 监听 in 捕获器
  has(target, key) {
    console.log(`监听到obj对象的${key}属性的in操作`, target);
    return key in target
  },

  // 监听delete捕获器
  deleteProperty(target, key) {
    console.log(`监听到obj对象的${key}属性的delete操作`, target);
    delete target[key]
  }
}) 

// in 判断是否在对象中 操作符
// console.log('name' in objProxy);

// delete 删除属性
delete objProxy.name