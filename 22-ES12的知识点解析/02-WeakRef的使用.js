// 在对象销毁的时候 告诉我该对象销毁
// ES12 监听对象销毁 FinalizationRegistry

// ES12 WeakRef 类(弱引用)


// WeakRef.prototype.deref() 
// 如果原对象没有销毁 获取到原对象 
// 如果销毁 返回的是undefined

const finalRegistry = new FinalizationRegistry(callback => {
  console.log(`注册在finalRegistry对象, ${callback}被销毁了`);
})


let obj = {
  name: 'why'
}
// let info = obj   //希望 info 对象 指向 obj对象是 弱引用

// 弱引用
// let info = new WeakSet()
// info.add(obj) 

let info = new WeakRef(obj)   // 弱引用
 
// .register 方法 注册
finalRegistry.register(obj, 'obj')

// weakRef 不能通过 Obj.key 获取对象属性值  必须要通过WeakRef.prototype.deref 函数获取 
// Obj.deref().key 获取属性值
console.log(info.deref().name);


obj = null 

setTimeout(() => {
  console.log(info.deref()?.name);

}, 10000)
