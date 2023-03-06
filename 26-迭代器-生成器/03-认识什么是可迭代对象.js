// 可迭代对象
// 要求
//    这个对象的要求必须要师兄你@@interator方法, 在代码中我们使用Symbol.iterator 方法访问属性
// Symbol.iterator 调用这个方法的时候 会生成一个迭代器



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

// // iterableObj对象就是可迭代对象
// console.log(iterableObj[Symbol.iterator]);

// // 第一次调用 Symbol.iterator 方法生成一个迭代器
// const iterator = iterableObj[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // 第二次调用 (每次调用都会生成新的迭代器)
// const iterator1 = iterableObj[Symbol.iterator]()
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());



// for...of利用遍历的对象必须是可迭代对象
const obj = {
  name: 'obj',
  age: 18
}


// 对象不支持 for...of 因为 对象不是一个可迭代对象
// for (const item of obj) {
//   console.log(item);
// }
// 报错  obj is not iterable


// for...of 遍历 iterableObj 是根据 done 决定的 done 为 true 停止遍历
for (const item of iterableObj) {
  console.log(item);
}