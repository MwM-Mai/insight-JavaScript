const obj = {
  name: "why",
  age: 18
}

// Object.defineProperty(obj, 'name', {
//   set(value) {
//     console.log('监听到obj对象的哪些属性被访问了');
//   },
//   get() {
//     console.log('监听到obj对象的哪些属性被设置值');
//     return
//   }
// })

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被访问了`);
      value = newValue
    },
    get() {
      console.log(`监听到obj对象的${key}属性被设置值`);
      return value
    }
  })
})