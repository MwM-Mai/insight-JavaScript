var obj = {
  name: 'why', 
  age: 18, 
  address: '广东省'
}

let _address = '北京市'

// 存取属性描述符
// 两个运用场景
// 1. 隐藏某个私有属性不希望被外界使用和赋值
// 2. 如果我们希望截获某个属性它访问和设置值的过程时, 也会存取属性描述符
Object.defineProperty(obj, 'address', {
  get() {
    foo()
    // console.log(obj.address); 
    // 打印 obj.address 会默认调用 Object.defineproperty() 方法的 set/get  如果在 get/set 打印会报错
    return _address
  },
  set(newValue) {
    // console.log(newValue);
    // 需要一个媒介 赋值 否者会报错 栈溢出
    console.log('set');
    _address = newValue
  }
})

console.log(obj.address);  // 打印 obj.address 会默认调用 Object.defineproperty() 方法的 set/get  如果在 get/set 打印会报错


function foo() {
  // console.log(obj.address); 打印 obj.address 会默认调用 Object.defineproperty() 方法的 set/get  如果在 get/set 打印会报错
  // console.log('get');
}

obj.address = '广州市'
console.log(obj);




