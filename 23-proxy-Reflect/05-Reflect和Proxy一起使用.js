const obj = {
  name: 'why',
  age: 18
}


// Proxy(代理) 构造函数 是不想对原对象进行操作
// set/get 的代码块都是对原对象进行了操作
// 所有结合了 Reflect 使用 避免对原对象进行操作
const objProxy = new Proxy(obj, {
  set(target, key, newValue, receiver) {
    console.log(`set-----------`);
   Reflect.set(target, key, newValue)
  },
  get(target, key, receiver) {
    console.log(`get-----------`);
    return Reflect.get(target, key)   // 通过语言内部 获取 target key
  },
})

objProxy.name = 'obj'
console.log(objProxy.name);