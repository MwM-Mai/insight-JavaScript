var name = 'why'

var obj = {
  // 属性的简写
  name,
  // 方法的简写
  foo() {

  },

  // computer property name计算属性名
  [name + 123] : '哈哈哈哈'
}

console.log(obj[name + 123]);