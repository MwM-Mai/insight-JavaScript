var obj = {
  // 私有属性(JS里面是没有严格意义的私有属性)
  _age: 18,
  _eating() { },
  age: 30
}


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

obj.age = 20
console.log(obj.age);