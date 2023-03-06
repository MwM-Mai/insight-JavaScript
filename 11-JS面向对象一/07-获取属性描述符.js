var obj = {
  // 私有属性(JS里面是没有严格意义的私有属性)
  _age: 18,
  _eating() { },
  age: 30
}

// 同时添加多个属性的属性描述符
Object.defineProperties(obj, {
  name: {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 'why'
  },
  age: {
    get() {
      console.log('get');
      return this._age
    },
    set(value) {
      console.log('set');
      this._age = value
    }
  }
})


// 获取某一个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));



// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));