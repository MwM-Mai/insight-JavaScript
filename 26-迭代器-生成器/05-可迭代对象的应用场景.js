// 1. for...of

// 2. 扩展运算符

const iterableObj = {
  names: ['abc', 'cba', 'nba'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {    // 因为 如果不用箭头函数 this 指向了的是调用的对象  箭头函数 this指向的是上层作用域的 this
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

const names = ['james', 'kobe', 'ccury']
const newNames = [...names, ...iterableObj]
console.log(newNames[Symbol.iterator]);
console.log(newNames);

// ES9(2018)中新增的特性： 用到不是迭代器
const obj = { name: 'why', age: 18 }
const newObj = { ...obj }
console.log(newObj);

// 3. 解构赋值
const [name1, name2] = names