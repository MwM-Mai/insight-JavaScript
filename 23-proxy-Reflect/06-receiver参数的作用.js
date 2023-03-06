const obj = {
  _name: 'why',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

// 想对 obj 对象的操作进行监听
// receiver 就是代理对象
// 1. 因为没有 receiver 参数 Reflect.get(target, key) 指向 obj 这个对象 调用了 obj对象的 get()
// 2. 而 obj 的 get 的 this 指向的是 obj 所有也对了 obj进行直接的操作 Proxy(代理)是避免直接操作 obj对象的
// 3. 所有 receiver 指回了 Proxy 构造函数的实例对象
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // receiver 创建出来的是代理对象
    console.log(`get方法被访问`, key, receiver);
    return Reflect.get(target, key, receiver)   // Relect对象的 receiver 参数 是修改this的指向
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  }
})

objProxy.name = 'obj'
console.log(objProxy.name);