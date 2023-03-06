// 在对象销毁的时候 告诉我该对象销毁
// 监听对象销毁 FinalizationRegistry
const finalRegistry = new FinalizationRegistry(callback => {
  console.log(`注册在finalRegistry对象, ${callback}被销毁了`);
})


let obj = {
  name: 'why'
}
let info = {
  name: 'info'
}


// .register 方法 注册
finalRegistry.register(obj, 'obj')
finalRegistry.register(info, 'info')


obj = null
info = null
